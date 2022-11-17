import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { NoteCreate } from "../../molecules/NoteCreate/NoteCreate";
export const CreateNoteModal = ({ isOpen, onSubmit, onClose, categoryId }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NoteCreate categoryId={categoryId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
