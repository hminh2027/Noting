import React from "react";
import { AccountRow } from ".";

export const AccountList = ({ note, mutate }) => {
  const { sharedNotes: users } = note;
  return (
    <div className="flex flex-col divide-y">
      {users?.map((user) => (
        <AccountRow mutate={mutate} user={user} note={note} />
      ))}
    </div>
  );
};
