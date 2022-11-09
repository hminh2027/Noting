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
import { NoteCreate } from "../src/components/UI/molecules/NoteCreate/NoteCreate";
const Test = ({ noteCategories, notes }) => {
  return <NoteCreate />;
};

export default Test;
