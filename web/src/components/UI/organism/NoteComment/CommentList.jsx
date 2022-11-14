import { useQuery } from "@tanstack/react-query";
import React from "react";
import { commentApi } from "../../../../api/apis";
import { REACT_QUERY_KEYS } from "../../../../const/react-query-key";
import { CommentInput, CommentRow } from "../../molecules/NoteComment";

export const CommentList = ({ note }) => {
  const { id } = note;

  const { data: comments } = useQuery({
    queryKey: [REACT_QUERY_KEYS.COMMENT_NOTE_ID],
    queryFn: () => commentApi.getAllByNoteId(id),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col-reverse divide-y max-h-[800px] overflow-auto ">
        {comments?.map((comment) => (
          <CommentRow comment={comment} key={comment.id} />
        ))}
      </div>

      <CommentInput noteId={id} />
    </div>
  );
};
