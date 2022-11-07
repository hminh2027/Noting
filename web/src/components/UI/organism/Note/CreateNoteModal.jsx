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
export const CreateNoteModal = ({ isOpen, onSubmit, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl isRequired>
                <FormLabel>Note title</FormLabel>
                <Input placeholder="Title" />
              </FormControl>
              <Button variant="solid" colorScheme="blue" onClick={onSubmit}>
                Create
              </Button>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
