import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Flex,
  Stack,
  Avatar,
  Heading,
  Box,
  InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import { signUp } from "../../../service/auth";
export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const onSubmit = (values) => {
    signUp(values);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl id="firstName" isInvalid={errors.firstName}>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: { value: true, message: "This is required." },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="lastName" isInvalid={errors.lastName}>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: { value: true, message: "This is required." },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={errors.email}>
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="email address"
                    {...register("email", {
                      required: { value: true, message: "This is required." },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <InputGroup>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: { value: true, message: "This is required." },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="passwordConfirmation"
                isInvalid={errors.passwordConfirmation}
              >
                <InputGroup>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("passwordConfirmation", {
                      required: { value: true, message: "This is required." },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.password_confirm?.message}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Link href={"/login"}>
        <a>Login here</a>
      </Link>
    </Flex>
  );
};
