import React from "react";
import { Title, Content } from "../../molecules/NoteActivity";

export const NoteActivityRow = ({ note, user, snapshot, className }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Title snapshot={snapshot} />
      <Content snapshot={snapshot} />
    </div>
  );
};
