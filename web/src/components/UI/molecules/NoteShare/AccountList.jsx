import React from "react";
import { AccountRow } from ".";

export const AccountList = ({ note }) => {
  const { sharedNotes: users } = note;
  return (
    <div className="flex flex-col divide-y">
      {users?.map((user) => (
        <AccountRow user={user} />
      ))}
    </div>
  );
};
