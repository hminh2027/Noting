import { Text, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
export const NoteActivityModal = ({
  snapshots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
}) => {
  const [curSnapshot, setcurSnapshot] = useState();
  const handleSnapshotClick = (id) => {};
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <IconButton onClick={onOpen} />
      <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="flex flex-1 divide-x-2">
            <div className="flex flex-1"></div>
            <div className="flex flex-col divide-y-2 min-w-[200px]">
              <div className="flex flex-col h-[400px] overflow-auto py-1">
                {snapshots.map((snapshot) => (
                  <div
                    className="text-left py-2 px-1 cursor-pointer  hover:bg-gray-200"
                    onClick={handleSnapshotClick}
                  >
                    <div className="flex flex-col px-2">
                      <Text fontWeight={"medium"} fontSize={"sm"}>
                        Sep 20th 2022
                      </Text>
                      <Text fontWeight={"light"} fontSize={"xs"}>
                        Phan Tien Anh
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center p-2 gap-4">
                <Button variant={"solid"} colorScheme="teal">
                  Restore
                </Button>
                <Button variant={"outline"} onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};
