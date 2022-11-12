import { Avatar, Text } from "@chakra-ui/react";
import React from "react";

export const CommentRow = ({ user }) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-2">
        <Avatar size="sm" />
        <Text fontWeight={"medium"} fontSize={"sm"}>
          Name
        </Text>
      </div>
      <div className="mx-10">COMMENT CONTENT</div>
    </div>
  );
};
