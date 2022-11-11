import { useRouter } from "next/router";
import React from "react";
import { NoteDetailTemplate } from "../../src/components/UI/template/Note/NoteDetailTemplate";
import { useGetNoteById } from "../../src/hooks/swr";

const NoteDetail = () => {
  const { id } = useRouter().query;

  const {
    note,
    isLoading: isNoteLoading,
    isError: isNoteError,
  } = useGetNoteById(id);
  if (isNoteLoading || isNoteError) return <div></div>;
  return <NoteDetailTemplate note={note} />;
};

export default NoteDetail;
