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
export const NoteCategory = ({ name, items, className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            {items?.map((item, index) => (
              <Button
                variant="ghost"
                colorScheme="teal"
                className="justify-start"
                key={index}
              >
                {item.name}
              </Button>
            ))}
            <Button onClick={onOpen}>Add Note</Button>
            <CreateNoteModal
              isOpen={isOpen}
              onClose={onClose}
              onSubmit={() => {
                console.log("Created");
              }}
            />
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
