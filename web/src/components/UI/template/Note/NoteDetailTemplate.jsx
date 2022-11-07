import React from "react";
import dynamic from "next/dynamic";
import { Header } from "../../organism/NoteDetail";
import {
  noteAdapter,
  NoteAdapter,
} from "../../../../utils/Adapter/noteAdapter";

const NoteEditor = dynamic(import("../../../Editor"), {
  ssr: false,
});
export const NoteDetailTemplate = ({ note: Note }) => {
  const note = noteAdapter.setNote(Note);
  return (
    <div className="flex flex-col gap-4">
      <Header note={Note} />
      <NoteEditor data={note.convertContentToBlock()} />
    </div>
  );
};
