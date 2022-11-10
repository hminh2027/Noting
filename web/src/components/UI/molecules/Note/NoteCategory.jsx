import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Button,
  Box,
  AccordionPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { CreateNoteModal } from "../../organism/Note";
import { useRouter } from "next/router";
export const NoteCategory = ({ category, className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { name, id: categoryId, notes } = category;
  const NoteItemClickHandler = (id) => {
    router.push(`/note/${id}`);
  };
  return (
    <Accordion defaultIndex={[0]} allowMultiple className={`${className}`}>
      <AccordionItem>
        <AccordionButton className="flex gap-4">
          <AccordionIcon />
          <Box flex="1" textAlign="left">
            {name}
          </Box>
          {/* Create new note */}
          <Button
            variant={"ghost"}
            size="sm"
            colorScheme="cyan"
            onClick={(e) => e.stopPropagation()}
          >
            <FaPlus />
          </Button>
        </AccordionButton>
        <AccordionPanel padding={"0"}>
          <div className="flex flex-col">
            {notes?.map((note) => (
              <Button
                variant="ghost"
                colorScheme="teal"
                key={note.id}
                className="text-left"
                onClick={() => NoteItemClickHandler(note.id)}
              >
                {note.title}
              </Button>
            ))}
            <Button onClick={onOpen}>Add Note</Button>
            <CreateNoteModal
              isOpen={isOpen}
              onClose={onClose}
              categoryId={categoryId}
            />
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
