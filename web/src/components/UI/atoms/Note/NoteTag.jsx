import React from "react";
import { Tag, TagLabel } from "@chakra-ui/react";
export const NoteTag = ({
  children,
  colorScheme = "purple",
  rightIcon,
  leftIcon,
}) => {
  return (
    <Tag
      className="px-2 py-1 h-min w-max"
      colorScheme={colorScheme}
      borderRadius={"1.5rem"}
    >
      {leftIcon && leftIcon}
      <TagLabel>{children}</TagLabel>
      {rightIcon && rightIcon}
    </Tag>
  );
};
