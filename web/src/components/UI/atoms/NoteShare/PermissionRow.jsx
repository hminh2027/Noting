import { Button, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { REACT_QUERY_KEYS } from "../../../../const/react-query-key";

import { updatePermission } from "../../../../service/note-share";

export const PermissionRow = ({
  onClose,
  permission,
  isActive = true,
  user,
}) => {
  const queryClient = useQueryClient();
  const { noteId, userId } = user;
  const { name, description, id } = permission;
  const onClickHandler = () => {
    mutation.mutate();
  };
  const mutation = useMutation({
    mutationFn: () => updatePermission({ noteId, userId, permission: id }),
    onSuccess: () => {
      setTimeout(
        () =>
          queryClient.invalidateQueries({
            queryKey: [REACT_QUERY_KEYS.NOTE_ID],
          }),
        100
      );
    },
  });
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
