import React from "react";
import dynamic from "next/dynamic";
import { Header } from "../../organism/NoteDetail";

const NoteEditor = dynamic(import("../../../Editor"), {
  ssr: false,
});
export const NoteDetailTemplate = ({ mutate, note }) => {
  return (
    <div className="flex flex-col gap-4">
      <Header mutate={mutate} note={note} />
      <NoteEditor mutate={mutate} note={note} />
    </div>
  );
};
