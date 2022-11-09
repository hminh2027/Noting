import { useRouter } from "next/router";
import React from "react";
import { NoteDetailTemplate } from "../../src/components/UI/template/Note/NoteDetailTemplate";
import { useGetNoteById, useGetNote } from "../../src/hooks/swr";

const NoteDetail = () => {
  const { id } = useRouter().query;

  const {
    note,
    isLoading: isNoteLoading,
    isError: isNoteError,
  } = useGetNoteById(id);
  if (isNoteLoading) return <div></div>;
  return <div></div>;
  // <NoteDetailTemplate note={notes[0]} />;
};

export default NoteDetail;
