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
import { USER_PERMISSIONS } from "../../../../const";

export const PermissionListPopover = ({ mutate, note, user }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button rightIcon={<FaAngleDown />} size="xs" variant="ghost">
          {USER_PERMISSIONS[`${user.permission}`].name}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-1">
          <PermissionList mutate={mutate} note={note} user={user} />
        </div>
      </PopoverContent>
    </Popover>
  );
};
