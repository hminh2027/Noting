import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NoteActivityList } from "./NoteActivityList";
import { AiOutlineClockCircle } from "react-icons/ai";
export const NoteActivityDrawer = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        size="md"
        variant={"ghost"}
        icon={<AiOutlineClockCircle />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Note's activities</DrawerHeader>

          <DrawerBody>
            <NoteActivityList note={note} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
