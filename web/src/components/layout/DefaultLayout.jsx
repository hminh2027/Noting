import { useSession } from "next-auth/react";
import React from "react";
import { useGetCategory } from "../../hooks/swr";
import { NoteSidebar } from "../UI/organism/Note";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const DefaultLayout = ({ children }) => {
  const { user, loading } = useSession();
  const { categories, isError, isLoading } = useGetCategory();
  return (
    <div className="flex min-h-screen max-h-screen">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1">
          {categories && <NoteSidebar categories={categories} className="" />}
          <div className="p-4 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
