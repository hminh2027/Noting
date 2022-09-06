import React from "react";

const MenuItem = ({ icon, text, isActive }) => {
  return (
    <div className="flex p-4 gap-2 items-center text-gray-600 hover:text-daisy-bush-600 cursor-pointer text-2xl rounded-md">
      <div>{icon}</div>
      <div className="">{text}</div>
    </div>
  );
};

export default MenuItem;
