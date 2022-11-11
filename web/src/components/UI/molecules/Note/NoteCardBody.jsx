import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const NoteCardBody = ({ onClick, className, note }) => {
  const { title, blocks } = note;
  return (
    <div className={`flex flex-col gap-2 ${className}`} onClick={onClick}>
      <Heading size="md">{title}</Heading>
    </div>
  );
};
