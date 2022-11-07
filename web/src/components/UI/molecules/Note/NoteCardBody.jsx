import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { noteAdapter } from "../../../../utils/Adapter/noteAdapter";

export const NoteCardBody = ({ onClick, className, note }) => {
  const { title } = note;
  const content = noteAdapter.setNote(note).getContent();
  console.log(content);
  return (
    <div className={`flex flex-col gap-2 ${className}`} onClick={onClick}>
      <Heading size="md">{title}</Heading>
      <Text fontSize="md" noOfLines={3}>
        {/* {content[0].data.text} */}
      </Text>
    </div>
  );
};
