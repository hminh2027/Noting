import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Button,
  Box,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
export const NoteCategory = ({ title, items, className }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple className={`${className}`}>
      <AccordionItem>
        <AccordionButton className="flex gap-4">
          <AccordionIcon />
          <Box flex="1" textAlign="left">
            {title}
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
            {items.map((item) => (
              <Button
                variant="ghost"
                colorScheme="teal"
                className="justify-start"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
