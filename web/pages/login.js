import Link from "next/link";
import React from "react";
import { EmptyLayout } from "../src/components/layout/EmptyLayout";
import LoginTemplate from "../src/components/UI/template/Login/LoginTemplate";
const Login = () => {
  return (
    <div>
      <LoginTemplate />
    </div>
  );
};
Login.layout = EmptyLayout;
export default Login;
