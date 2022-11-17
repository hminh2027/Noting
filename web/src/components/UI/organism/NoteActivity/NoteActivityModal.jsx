import { Text, Button, useDisclosure, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { getTimeFromTimeStamp } from "../../../../utils/time";
import dynamic from "next/dynamic";
import { snapshotAdapter } from "../../../../utils/Adapter/snapshotAdapter";
import { restoreSnapshot } from "../../../../service/snapshot";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
const Output = dynamic(() => import("editorjs-react-renderer"), { ssr: false });

export const NoteActivityModal = ({ snapshots }) => {
  const [curSnapshot, setcurSnapshot] = useState(snapshots[0]);
  const router = useRouter();
  const handleSnapshotClick = (snapshot) => {
    const snapshotToSet = snapshotAdapter
      .setSnapshot(snapshot)
      .convertContentToBlock()
      .getSnapshot();
    setcurSnapshot(snapshotToSet);
  };
  const mutation = useMutation({
    mutationFn: () => restoreSnapshot(curSnapshot),
    onSuccess: () => {
      setTimeout(() => router.reload(), 100);
    },
  });
  const handleRestoreSnapshot = () => {
    mutation.mutate();
  };

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Snapshots
      </Button>
      <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="flex flex-1 divide-x-2">
            {curSnapshot && (
              <div className="flex divide-y flex-col gap-2 flex-1 p-4">
                <Text fontSize={"lg"} fontWeight="bold">
                  {curSnapshot.title}
                </Text>
                <div>
                  <Output
                    data={curSnapshot.blocks}
                    style={{ textAlign: "center" }}
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col divide-y-2 min-w-[200px]">
              <div className="flex flex-col h-[400px] overflow-auto py-1">
                {snapshots.map((snapshot) => (
                  <div
                    className="text-left py-2 px-1 cursor-pointer  hover:bg-gray-200"
                    onClick={() => handleSnapshotClick(snapshot)}
                  >
                    <div className="flex flex-col px-2">
                      <Text fontWeight={"medium"} fontSize={"sm"}>
                        {getTimeFromTimeStamp(+snapshot.createdAt)}
                      </Text>
                      <Text fontWeight={"light"} fontSize={"xs"}>
                        {snapshot.user.lastName}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center p-2 gap-4">
                <Button
                  variant={"solid"}
                  colorScheme="teal"
                  onClick={handleRestoreSnapshot}
                >
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
