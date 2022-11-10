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
  if (isNoteLoading || isNoteError) return <div></div>;
  console.log(note);
  return <NoteDetailTemplate note={note} />;
};

export default NoteDetail;
