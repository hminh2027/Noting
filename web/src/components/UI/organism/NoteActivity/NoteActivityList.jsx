import React from "react";
import { NoteActivityModal } from "./NoteActivityModal";
import { NoteActivityRow } from "./NoteActivityRow";

export function NoteActivityList({ note }) {
  const { snapshots } = note;
  return (
    <div className="flex flex-col divide-y">
      <NoteActivityModal snapshots={snapshots} />
      <div className="flex flex-col-reverse divide-y">
        {snapshots?.map((snapshot) => (
          <NoteActivityRow snapshot={snapshot} className="py-4" />
        ))}
      </div>
    </div>
  );
}
