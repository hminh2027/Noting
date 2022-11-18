import { Button, useDisclosure, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CreateCategoryModal } from ".";
import { NoteCategory } from "../../molecules/Note";
import SharedNote from "./SharedNote";

export const NoteSidebar = ({ privateCategories, sharedNotes, className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={`flex flex-col justify-between ${className}`}>
      <div className="flex flex-col  max-h-[800px] max-w-[250px] overflow-auto">
        <Text fontSize={"md"} fontWeight="bold">
          Private
        </Text>
        {privateCategories?.map((category, index) => (
          <NoteCategory category={category} key={index} />
        ))}
        <SharedNote notes={sharedNotes} title="Shared" />
      </div>
      <Button className="py-4" colorScheme={"blue"} onClick={onOpen}>
        Add Category
      </Button>
      <CreateCategoryModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
