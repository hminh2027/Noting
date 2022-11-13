import { IconButton, Text, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { NoteSharePopover } from "../../molecules/NoteShare/NoteSharePopover";
// const NoteSharePopover = dynamic(
//   import("../../molecules/NoteShare/NoteSharePopover")
// ).;
import { NoteActivityDrawer } from "../NoteActivity";
import { NoteCommentDrawer } from "../NoteComment";

export const Header = ({ note }) => {
  return (
    <div className="flex justify-between">
      <Text fontSize="lg" fontWeight={"medium"}>
        {note.title}
      </Text>
      <div className="flex gap-4">
        <NoteCommentDrawer />
        <NoteSharePopover note={note} />
        <NoteActivityDrawer />
      </div>
    </div>
  );
};
