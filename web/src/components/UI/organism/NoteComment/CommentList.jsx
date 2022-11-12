import React from "react";
import { CommentInput, CommentRow } from "../../molecules/NoteComment";

export const CommentList = ({ comments }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col divide-y max-h-[800px] overflow-auto">
        <CommentRow />
        <CommentRow />
        <CommentRow />
        <CommentRow />
      </div>

      <CommentInput />
    </div>
  );
};
