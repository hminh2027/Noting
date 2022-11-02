import React from "react";
import { Title, Content } from "../../molecules/NoteActivity";

export const NoteActivityCard = ({ note, user, snapshot, className }) => {
  return (
    <div className={`w-[300px] flex flex-col gap-4 ${className}`}>
      <Title note={note} user={user} />
      <Content />
    </div>
  );
};
