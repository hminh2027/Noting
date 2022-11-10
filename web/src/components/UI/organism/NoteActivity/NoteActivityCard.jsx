import React from "react";
import { Title, Content } from "../../molecules/NoteActivity";

export const NoteActivityCard = ({ note, user, snapshot, className }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Title note={note} user={user} />
      <Content />
    </div>
  );
};
