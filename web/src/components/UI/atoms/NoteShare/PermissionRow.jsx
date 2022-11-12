import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSWRConfig } from "swr";
import { useGetNoteById } from "../../../../hooks/swr";

import { updatePermission } from "../../../../service/note-share";

export const PermissionRow = ({
  onClose,
  permission,
  isActive = true,
  user,
  mutate,
}) => {
  const { noteId, userId } = user;
  const { name, description, id } = permission;
  const onClickHandler = () => {
    updatePermission({ noteId, userId, permission: id });
    setTimeout(async () => {
      await mutate();
    }, 1000);
  };
  return (
    <Button variant={"ghost"} className="text-left" onClick={onClickHandler}>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <Text fontWeight={"normal"}>{name}</Text>
          <Text fontSize="xs" color={"gray"} fontWeight={"normal"}>
            {description}
          </Text>
        </div>
        <div>{isActive ? <FaCheck /> : ""}</div>
      </div>
    </Button>
  );
};
