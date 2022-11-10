import React from "react";
import { AccountRow } from ".";

export const AccountList = ({}) => {
  return (
    <div className="flex flex-col divide-y">
      <AccountRow />
      <AccountRow />
      <AccountRow />
      <AccountRow />
    </div>
  );
};
