import React from "react";
import dynamic from "next/dynamic";
import { Header } from "../../organism/NoteDetail";

const NoteEditor = dynamic(import("../../../Editor"), {
  ssr: false,
});
export const NoteDetailTemplate = ({ note }) => {
  return (
    <div className="flex flex-col gap-4">
      <Header note={note} />
      <NoteEditor note={note} />
    </div>
  );
};
