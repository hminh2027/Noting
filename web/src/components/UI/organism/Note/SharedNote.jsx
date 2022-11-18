import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
const SharedNote = ({ notes, title }) => {
  const router = useRouter();
  const NoteItemClickHandler = (id) => {
    router.push(`/note/${id}`);
  };
  return (
    <Accordion defaultIndex={[0]} allowMultiple className="w-full">
      <AccordionItem>
        <AccordionButton className="flex gap-4">
          <AccordionIcon />
          <Box flex="1" textAlign="left">
            <Text fontWeight={"medium"}>{title}</Text>
          </Box>
        </AccordionButton>
        <AccordionPanel padding={"0"}>
          <div className="flex flex-col">
            {notes?.map((note) => (
              <div
                key={note.id}
                className="text-left py-2 px-1 cursor-pointer  hover:bg-gray-200"
                onClick={() => NoteItemClickHandler(note.id)}
              >
                <Text className="truncate" fontSize={"sm"}>
                  {note.title}
                </Text>
              </div>
            ))}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SharedNote;
