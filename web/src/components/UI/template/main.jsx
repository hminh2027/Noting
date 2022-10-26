import React from "react";
import NoteSidebar from "../organism/NoteSidebar";
import dynamic from "next/dynamic";

const Main = () => {
  const NoteEditor = dynamic(() => import("../../Editor"), {
    ssr: false,
  });

  const temp = [
    {
      title: "Hello",
      items: [
        {
          name: "SubMenuItem-1",
          id: "1",
        },
        {
          name: "SubMenuItem-2",
          id: "2",
        },
        {
          name: "SubMenuItem-3",
          id: "3",
        },
      ],
    },
    {
      title: "Hello-2",
      items: [
        {
          name: "SubMenuItem2-1",
          id: "1",
        },
        {
          name: "SubMenuItem2-2",
          id: "2",
        },
        {
          name: "SubMenuItem2-3",
          id: "3",
        },
      ],
    },
  ];
  return (
    <div className="flex ">
      <NoteSidebar data={temp} className="min-w-[150px] min-h-full flex-1" />
      <div className="flex-1">{NoteEditor && <NoteEditor />}</div>
    </div>
  );
};

export default Main;
