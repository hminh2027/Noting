import { Avatar, Button } from "@chakra-ui/react";
import React from "react";
import { PermissionListPopover } from ".";

export const AccountRow = ({
  user = {
    firstName: "Example",
    lastName: "Example",
    email: "email@example.com",
  },
  note,
  mutate,
}) => {
  const { firstName, lastName, email } = user.user;
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 py-2">
        <Avatar
          name={firstName + lastName}
          src="https://bit.ly/tioluwani-kolawole"
          size={"sm"}
        />
        <div className="flex justify-between flex-col">
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <PermissionListPopover mutate={mutate} note={note} user={user} />
      </div>
    </div>
  );
};
