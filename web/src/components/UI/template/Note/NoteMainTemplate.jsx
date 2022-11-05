import React from "react";
import { NoteList } from "../../organism/Note";
export const NoteMainTemplate = ({ notes }) => {
  return (
    <div className="flex ">
      <NoteList notes={notes} />
    </div>
  );
};
