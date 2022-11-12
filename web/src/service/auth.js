import { signIn, signOut } from "next-auth/react";
import { authApi } from "../api/apis/authApi";

export const logIn = async ({ email, password }) => {
  signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  }).then(() => (window.location.href = "/"));
};
export const logOut = async () => {
  await signOut({ callbackUrl: "/login", redirect: true });
};
export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
  passwordConfirmation,
}) => {
  authApi
    .signUp({
      email,
      password,
      firstName,
      lastName,
      passwordConfirmation,
    })
    .then(() => (window.location.href = "/login"));
};
