import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { NoteActivityList } from "./NoteActivityList";
export const NoteActivityDrawer = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"sm"}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Note's activities</DrawerHeader>

          <DrawerBody>
            <NoteActivityList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
