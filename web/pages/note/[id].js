import React from "react";
import { NoteDetailTemplate } from "../../src/components/UI/template/Note/NoteDetailTemplate";
import { useGetNote } from "../../src/hooks/swr";

const NoteDetail = () => {
  const {
    notes,
    isLoading: isNoteLoading,
    isError: isNoteError,
  } = useGetNote();
  if (isNoteLoading) return <div></div>;
  return <NoteDetailTemplate note={notes[0]} />;
};

export default NoteDetail;
