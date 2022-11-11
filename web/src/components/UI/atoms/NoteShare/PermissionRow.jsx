import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";

export const PermissionRow = ({
  permission = {
    name: "Full access",
    description: "Can edit and share with others.",
  },
  isChecked = true,
}) => {
  const { name, description } = permission;
  return (
    <Button variant={"ghost"} className="text-left">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <Text fontWeight={"normal"}>{name}</Text>
          <Text fontSize="xs" color={"gray"} fontWeight={"normal"}>
            {description}
          </Text>
        </div>
        <div>{isChecked ? <FaCheck /> : ""}</div>
      </div>
    </Button>
  );
};
