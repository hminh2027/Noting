import { Avatar, Button, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineClock } from "react-icons/hi";
export const Title = ({ user, action = "edited", note, className }) => {
  return (
    <div className={`flex justify-between items-start ${className}`}>
      <div className="flex gap-2 items-center">
        <Avatar size={"sm"} name={user?.name || "Tiến Anh Phan"}></Avatar>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Text fontSize="sm">{`${
              user?.name || "Tiến Anh Phan"
            } ${action}`}</Text>
            <Button variant={"ghost"} size={"xs"} leftIcon={<HiOutlineClock />}>
              <Text fontSize={"sm"}>{note?.title || "CNPM"}</Text>
            </Button>
          </div>
          <Text fontSize="sm">20 hours ago</Text>
        </div>
      </div>

      <IconButton
        variant={"ghost"}
        size="sm"
        aria-label="Open snapshots"
        icon={<HiOutlineClock />}
      />
    </div>
  );
};
