import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { noteAdapter } from "../../../../utils/Adapter/noteAdapter";
import dynamic from "next/dynamic";
const NoteEditor = dynamic(import("../../../Editor"), {
  ssr: false,
});
export const NoteEditModal = ({
  onSave,
  onChange,
  onReady,
  onClose,
  isOpen,
  note,
}) => {
  const block = new noteAdapter(note);
  return (
    <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{note.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <NoteEditor
            data={block.getContent()}
            onChange={onChange}
            onSave={onSave}
            onReady={onReady}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
