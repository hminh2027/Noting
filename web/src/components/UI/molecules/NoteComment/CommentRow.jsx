import { Avatar, Text } from "@chakra-ui/react";
import React from "react";

export const CommentRow = ({ comment }) => {
  const { noteId, user, content } = comment;
  return (
    <div>
      <div className="flex items-center gap-2 py-2">
        <Avatar size="sm" />
        <Text fontWeight={"medium"} fontSize={"sm"}>
          {user.lastName}
        </Text>
      </div>
      <div className="mx-10">{content}</div>
    </div>
  );
};
