import React from "react";
import { NoteActivityCard } from "./NoteActivityCard";

export function NoteActivityList({ snapshots = [1, 2, 3, 4] }) {
  return (
    <div className="flex flex-col divide-y">
      {snapshots?.map((snapshot) => (
        <NoteActivityCard className="" />
      ))}
    </div>
  );
}
