import React from "react";
import { NoteSidebar } from "../UI/organism/Note";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1">
          {/* <div> */}
          <NoteSidebar />
          {/* </div> */}
          <div className="flex flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
