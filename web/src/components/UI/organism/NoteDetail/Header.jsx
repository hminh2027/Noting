import { IconButton, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { NoteActivityDrawer } from "../NoteActivity";

export const Header = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-between">
      <Text fontSize="lg">{note.title}</Text>
      <div className="flex gap-4">
        <IconButton icon={<AiOutlineClockCircle />} onClick={onOpen}>
          Open
        </IconButton>
        <NoteActivityDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div>
    </div>
  );
};
