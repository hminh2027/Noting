import React, { useEffect, useRef, useState } from "react";
import LoginTemplate from "../src/components/UI/template/Login/LoginTemplate";
import { logIn } from "../src/service/auth";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const loginHanlder = async () => {
    await logIn(email.current.value, password.current.value);
  };
  return (
    <LoginTemplate
      emailRef={email}
      passwordRef={password}
      onLogin={loginHanlder}
    ></LoginTemplate>
  );
};

export default Login;
