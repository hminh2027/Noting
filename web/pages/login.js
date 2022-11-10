import React, { useEffect, useState } from "react";
import AvatarUserLogin from "../src/components/UI/atoms/LoginForm/AvatarUserLogin";
import ButtonLogin from "../src/components/UI/atoms/LoginForm/ButtonLogin";
import LoginInputGroup from "../src/components/UI/molecules/LoginInput/LoginInputGroup";
import LoginTemplate from "../src/components/UI/template/Login/LoginTemplate";
import { logIn } from "../src/service/auth";
const Login = () => {
  const email = useRef();
  const password = useRef();
  const loginHanlder = async () => {
    await logIn(email.current.value, password.current.value);
  };
  return (
    <LoginTemplate/>
   
  );
};

export default Login;
