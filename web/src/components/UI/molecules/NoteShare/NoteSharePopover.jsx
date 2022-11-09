import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@chakra-ui/react";
import { AccountList, InviteInput } from ".";
export const NoteSharePopover = () => {
  return (
    <Popover preventOverflow={true} isLazy>
      <PopoverTrigger>
        <Button size="sm" variant={"ghost"}>
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent width={"350px"}>
        {/* <PopoverBody> */}
        <div className="flex flex-col gap-2 p-2 divide-y">
          <InviteInput />
          <div className="flex flex-col">
            <AccountList />
          </div>
        </div>
        {/* </PopoverBody> */}
      </PopoverContent>
    </Popover>
  );
};
