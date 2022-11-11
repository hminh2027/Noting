import { signIn, signOut } from "next-auth/react";

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
