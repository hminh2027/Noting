import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { NoteTag } from "../../atoms/Note";
import { NoteCardBody, NoteCardHeader } from "../../molecules/Note";
import { NoteEditModal } from "../../molecules/Note/NoteEditModal";
export const NoteCard = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex flex-col gap-2 rounded-lg p-4 bg-white border border-gray-300 ">
      <NoteCardHeader
        createdAt={note.createdAt}
        status={note.status && note.status}
      />
      <NoteCardBody note={note} onClick={onOpen} className="py-2" />
      <div className="flex gap-4">
        {note.tags.map((tag, index) => (
          <NoteTag key={index} colorScheme="gray">
            {tag.name}
          </NoteTag>
        ))}
      </div>
      <NoteEditModal isOpen={isOpen} onClose={onClose} note={note} />
    </div>
  );
};
