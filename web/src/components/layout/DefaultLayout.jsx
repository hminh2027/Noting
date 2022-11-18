import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useGetCategory } from "../../hooks/swr";
import { getCategory, getSharedNote } from "../../service/category";
import { NoteSidebar } from "../UI/organism/Note";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const DefaultLayout = ({ children }) => {
  const { user, loading } = useSession();
  const { categories, isError, isLoading } = useGetCategory();
  const [sharedNote, setSharedNote] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const sharedNote = await getSharedNote();
      setSharedNote(sharedNote);
    };
    fetch();
  }, []);

  return (
    <div className="flex min-h-screen max-h-screen max-w-[1920px]">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1">
          <div>
            {categories && (
              <NoteSidebar
                privateCategories={categories}
                sharedNotes={sharedNote}
                className=""
              />
            )}
          </div>
          <div className="p-4 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
