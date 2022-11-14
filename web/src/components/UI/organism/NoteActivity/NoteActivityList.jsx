import React from "react";
import { NoteActivityRow } from "./NoteActivityRow";

export function NoteActivityList({ note }) {
  const { snapshots } = note;
  return (
    <div className="flex flex-col divide-y">
      {snapshots?.map((snapshot) => (
        <NoteActivityRow className="py-4" />
      ))}
    </div>
  );
}
