import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CreateCategoryModal } from ".";
import { NoteCategory } from "../../molecules/Note";

export const NoteSidebar = ({ categories, className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={`flex flex-col justify-between ${className}`}>
      <div className="flex flex-col max-h-[800px] max-w-[250px] overflow-auto">
        {categories?.map((category, index) => (
          <NoteCategory category={category} key={index} />
        ))}
      </div>
      <Button className="py-4" colorScheme={"blue"} onClick={onOpen}>
        Add Category
      </Button>
      <CreateCategoryModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
