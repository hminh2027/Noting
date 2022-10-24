import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col flex-1">{children}</div>
      </div>
    </div>
  );
};
export default DefaultLayout;
