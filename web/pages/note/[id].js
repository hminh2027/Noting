import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { noteApi } from "../../src/api/apis";
import { NoteDetailTemplate } from "../../src/components/UI/template/Note/NoteDetailTemplate";
const NoteDetail = () => {
  const { id } = useRouter().query;
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note-id", id],
    queryFn: () => noteApi.get(id),
    cacheTime: 0,
  });

  if (isLoading || isError) return <div></div>;
  return <NoteDetailTemplate note={note} />;
};

export default NoteDetail;
