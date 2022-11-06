import React, { useEffect, useRef, useState } from "react";
import LoginTemplate from "../src/components/UI/template/Login/LoginTemplate";
import {
  signIn,
  signOut,
  useSession,
  getSession,
  getCsrfToken,
} from "next-auth/react";
const Protected = () => {
  return (
    <div
      onClick={async () => {
        await signOut({ callbackUrl: "/login", redirect: true });
      }}
    >
      Hello
    </div>
  );
};

export default Protected;
