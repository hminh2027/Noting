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
export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedVal, setSubmittedVal] = useState();
  const onSubmit = (data) => {
    setSubmittedVal(data);
    console.log(data);
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
              <FormControl id="userName" isInvalid={errors.userName}>
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="email address"
                    {...register("userName", {
                      required: { value: true, message: "This is required." },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
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
                id="password_confirm"
                isInvalid={errors.password_confirm}
              >
                <InputGroup>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("password_confirm", {
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
            {submittedVal && (
              <div>
                Submitted Data:
                <br />
                {JSON.stringify(submittedVal)}
              </div>
            )}
          </form>
        </Box>
      </Stack>
      <Link href={"/login"}>
        <a>Login here</a>
      </Link>
    </Flex>
  );
};
