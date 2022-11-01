import React from "react";
import { NoteCardBody, NoteCardHeader } from "../../molecules/Note";

export const NoteCard = ({ note }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-4 bg-white border border-gray-300 ">
      <NoteCardHeader
        createdAt={note.createdAt}
        status={note.status && note.status}
      />
      <NoteCardBody title={note.title} content={note.content} />
    </div>
  );
};
