import React from "react";
import dynamic from "next/dynamic";
import { Header } from "../../organism/NoteDetail";
import { NoteAdapter } from "../../../../utils/Adapter/noteAdapter";

const NoteEditor = dynamic(import("../../../Editor"), {
  ssr: false,
});
export const NoteDetailTemplate = ({ note }) => {
  const noteAdapter = new NoteAdapter(note);
  return (
    <div className="flex flex-col gap-4">
      <Header note={note} />
      <NoteEditor data={noteAdapter.getContent()} />
    </div>
  );
};
