import { Avatar, Button } from "@chakra-ui/react";
import React from "react";
import { PermissionListPopover } from ".";

export const AccountRow = ({
  user = {
    name: "Example",
    email: "email@example.com",
  },
}) => {
  const { name, email } = user;
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Avatar
          name="Kola Tioluwani"
          src="https://bit.ly/tioluwani-kolawole"
          size={"sm"}
        />
        <div className="flex justify-between flex-col">
          <div>{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>
        <PermissionListPopover />
      </div>
    </div>
  );
};
