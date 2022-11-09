import React, { useEffect, useRef, useState } from "react";
import LoginTemplate from "../src/components/UI/template/Login/LoginTemplate";
import { signIn } from "next-auth/react";
const Login = () => {
  const email = useRef();
  const password = useRef();
  // const enteredEmail = email.current.
  return (
    <LoginTemplate
      emailRef={email}
      passwordRef={password}
      onLogin={async () => {
        const res = await signIn("credentials", {
          redirect: false,
          password: password.current.value,
          email: email.current.value,
        });
        console.log(res);
      }}
    ></LoginTemplate>
  );
};

export default Login;
