import React, { useEffect } from "react";
import { logOut } from "../src/service/auth";

const Protected = () => {
  useEffect(async () => {
    await logOut();
  }, []);

  return <div>Loging out ...</div>;
};

export default Protected;
