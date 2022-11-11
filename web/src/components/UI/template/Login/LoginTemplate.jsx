import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../../../../service/auth";
import Link from "next/link";
const LoginTemplate = ({ onLogin, emailRef, passwordRef }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values) => {
    logIn(values);
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
        <Heading color="teal.400">Login</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl required>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "This is required." },
                  })}
                />
              </FormControl>
              <FormControl required>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: { value: true, message: "This is required." },
                  })}
                />
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={onLogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Link href={"/signup"}>
        <a>Sign up here</a>
      </Link>
    </Flex>
  );
};

export default LoginTemplate;
