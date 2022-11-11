// SessionLoader.tsx
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { setToken } from "./axiosClient";

const SessionLoader = ({ children }) => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <div className="loading" />;
  }

  if (session.status === "authenticated") {
    setToken(session.data.user.accessToken);
  }

  if (router.pathname === "/auth/login" && session.status === "authenticated") {
    router.push("/admin");
  }

  return <>{children}</>;
};

export default SessionLoader;
