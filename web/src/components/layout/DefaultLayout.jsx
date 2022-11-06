import { useSession } from "next-auth/react";
import React from "react";
import { useGetNoteCategory } from "../../hooks/swr";
import { NoteSidebar } from "../UI/organism/Note";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const DefaultLayout = ({ children }) => {
  const { user, loading } = useSession();
  console.log(user);
  const { categories, isError, isLoading } = useGetNoteCategory();
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1">
          {/* <div> */}
          <NoteSidebar categories={categories} />
          {/* </div> */}
          <div className="p-4 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
