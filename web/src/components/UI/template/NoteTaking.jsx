import React from "react";
import dynamic from "next/dynamic";
import NoteSidebar from "../organism/NoteSidebar";
const NoteEditor = dynamic(() => import("../../Editor"), {
  ssr: false,
});
const NoteTaking = () => {
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
    <div className="flex flex-1">
      <NoteSidebar data={temp} className="min-w-[150px] min-h-full" />
      <div className="flex-1">
        <NoteEditor />
      </div>
    </div>
  );
};

export default NoteTaking;
