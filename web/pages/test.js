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
  AccountList,
  AccountRow,
  InviteInput,
} from "../src/components/UI/molecules/NoteShare";
import { NoteSharePopover } from "../src/components/UI/molecules/NoteShare/NoteSharePopover";
const Test = ({ noteCategories, notes }) => {
  return <NoteSharePopover />;
};

export default Test;
