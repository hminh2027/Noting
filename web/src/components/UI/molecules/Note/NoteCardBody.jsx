import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const NoteCardBody = ({ title, content, onClick }) => {
  return (
    <div className="flex flex-col gap-2" onClick={onClick}>
      <Heading size="md">{title}</Heading>
      <Text fontSize="md" noOfLines={3}>
        {content[0].data.text}
      </Text>
    </div>
  );
};
