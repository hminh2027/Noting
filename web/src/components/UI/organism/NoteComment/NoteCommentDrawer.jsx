import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { CommentList } from "./CommentList";
import { BsChatLeftText } from "react-icons/bs";
export const NoteCommentDrawer = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        size="md"
        variant={"ghost"}
        icon={<BsChatLeftText />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Note's comments</DrawerHeader>
          <DrawerBody>
            <CommentList note={note} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
