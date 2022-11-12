import { IconButton, Text, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { NoteSharePopover } from "../../molecules/NoteShare/NoteSharePopover";
// const NoteSharePopover = dynamic(
//   import("../../molecules/NoteShare/NoteSharePopover")
// ).;
import { NoteActivityDrawer } from "../NoteActivity";

export const Header = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-between">
      <Text fontSize="lg" fontWeight={"medium"}>
        {note.title}
      </Text>
      <div className="flex gap-4">
        <NoteSharePopover note={note} />
        <IconButton
          size="sm"
          icon={<AiOutlineClockCircle />}
          onClick={onOpen}
        />

        <NoteActivityDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div>
    </div>
  );
};
