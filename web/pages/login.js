import React, { useEffect, useState } from "react";
import AvatarUserLogin from "../src/components/UI/atoms/LoginForm/AvatarUserLogin";
import ButtonLogin from "../src/components/UI/atoms/LoginForm/ButtonLogin";
import LoginInputGroup from "../src/components/UI/molecules/LoginInput/LoginInputGroup";
import LoginTemplate from "../src/components/UI/template/Login/LoginTemplate";

import { NoteDetailTemplate } from "../src/components/UI/template/Note/NoteDetailTemplate";
import { useGetNote, useGetNoteCategory } from "../src/hooks/swr";
const Login = () => {
  return <LoginTemplate></LoginTemplate>;
};

export default Login;
