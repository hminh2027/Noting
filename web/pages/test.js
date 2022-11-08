import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Input,
  Avatar,
} from "@chakra-ui/react";
import {
  AccountRow,
  InviteInput,
} from "../src/components/UI/molecules/NoteShare";
const Test = ({ noteCategories, notes }) => {
  return (
    <Popover matchWidth>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent width={"350px"}>
        {/* <PopoverBody> */}
        <div className="flex flex-col gap-2 p-2">
          <InviteInput />
          <div className="flex flex-col">
            <AccountRow />
          </div>
        </div>
        {/* </PopoverBody> */}
      </PopoverContent>
    </Popover>
  );
};

export default Test;
