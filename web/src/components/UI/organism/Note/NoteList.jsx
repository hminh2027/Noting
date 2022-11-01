import { Input } from "@chakra-ui/react";
import React from "react";
import { NoteCard } from ".";
import { NoteCreateButton } from "../../atoms/Note";

export const NoteList = ({ notes, className }) => {
  return (
    <div className={`flex flex-col flex-1 gap-8 ${className}`}>
      <div className="flex justify-between">
        <NoteCreateButton />
        <div>
          <Input type="date" />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        {notes?.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  );
};
