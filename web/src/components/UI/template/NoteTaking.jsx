import React from "react";
import NoteSidebar from "../organism/NoteSidebar";

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
    <div className="flex ">
      <NoteSidebar data={temp} className="min-w-[150px] min-h-full flex-1" />
      <div className="flex-1"></div>
    </div>
  );
};

export default NoteTaking;
