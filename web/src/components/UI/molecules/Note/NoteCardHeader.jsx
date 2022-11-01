import { AvatarGroup, Avatar, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NoteTag } from "../../atoms/Note";
export const NoteCardHeader = ({
  createdAt,
  status = "Wow",
  onClick,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex justify-between items-center" onClick={onClick}>
      <div className="flex gap-8 items-center">
        <NoteTag>{createdAt}</NoteTag>
        <AvatarGroup size="sm" max={3}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </div>
      <div className="flex gap-8 items-center">
        <NoteTag colorScheme="red">{status}</NoteTag>
        <div className="flex gap-2 items-center">
          <IconButton variant={"outline"} size="sm" onClick={onEdit}>
            <FaEdit color="" />
          </IconButton>
          <IconButton
            variant={"solid"}
            size="sm"
            colorScheme={"red"}
            onClick={onDelete}
          >
            <FaTrash />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
