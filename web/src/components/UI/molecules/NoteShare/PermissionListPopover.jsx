import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { PermissionList } from ".";

export const PermissionListPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button rightIcon={<FaAngleDown />} size="xs">
          Permission
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-1">
          <PermissionList />
        </div>
      </PopoverContent>
    </Popover>
  );
};
