import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NoteCategory } from "../../molecules/Note";

export const NoteSidebar = ({ categories, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {categories?.map((item, index) => (
        <NoteCategory title={item.title} items={item.items} key={index} />
      ))}
      <Button>Add Category</Button>
    </div>
  );
};
