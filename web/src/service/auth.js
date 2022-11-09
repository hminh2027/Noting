import { signIn, signOut } from "next-auth/react";

export const logIn = async (email, password) => {
  const res = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
  });
  console.log(res);
  if (res.status === 200) return "Login successfully";
  if (res.status === 401) return "Authorization failed";
};
export const logOut = async () => {
  await signOut({ callbackUrl: "/login", redirect: true });
};
