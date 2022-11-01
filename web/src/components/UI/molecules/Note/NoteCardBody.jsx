import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const NoteCardBody = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading size="md">{title}</Heading>
      <Text fontSize="md" noOfLines={3}>
        {content.data.text}
      </Text>
    </div>
  );
};
