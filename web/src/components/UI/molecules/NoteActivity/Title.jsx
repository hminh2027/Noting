import { Avatar, Button, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { getTimeDiff } from "../../../../utils/time";
export const Title = ({ snapshot, className }) => {
  const { user, title, description } = snapshot;
  const timeDiff = getTimeDiff(snapshot.createdAt);
  return (
    <div className={`flex justify-between items-start ${className}`}>
      <div className="flex gap-2 items-center">
        <Avatar size={"sm"} name={user?.lastName || "Tien Anh Phan"}></Avatar>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Text fontSize="sm">{user?.lastName || "Tien Anh Phan"} </Text>
            <Button variant={"ghost"} size={"xs"}>
              <Text style={{ wordWrap: "break-word" }} fontSize={"sm"}>
                {title || "CNPM"}
              </Text>
            </Button>
          </div>
          <Text fontSize="sm">{timeDiff}</Text>
        </div>
      </div>

      <IconButton
        variant={"ghost"}
        size="xs"
        aria-label="Open snapshots"
        icon={<HiOutlineClock />}
      />
    </div>
  );
};
