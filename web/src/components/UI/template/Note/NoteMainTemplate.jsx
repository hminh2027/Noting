import React from "react";
import { NoteList, NoteSidebar } from "../../organism/Note";
export const NoteMainTemplate = ({ categories, notes }) => {
  return (
    <div className="flex ">
      <NoteSidebar categories={categories} />
      <NoteList notes={notes} className="p-4" />
    </div>
  );
};
