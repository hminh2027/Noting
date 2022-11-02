import { Avatar } from "@chakra-ui/react";
import React from "react";

export const Title = ({ user, action }) => {
  return (
    <div className="flex">
      <Avatar name={user.name}></Avatar>
    </div>
  );
};
