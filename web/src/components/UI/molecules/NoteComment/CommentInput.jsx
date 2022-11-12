import { Avatar, Button, Input } from "@chakra-ui/react";
import React from "react";

export const CommentInput = ({ user }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar size="sm" />
      <form className="flex-1">
        <div className="flex gap-2">
          <Input />
          <Button colorScheme={"teal"} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
