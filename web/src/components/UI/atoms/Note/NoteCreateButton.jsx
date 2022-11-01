import { Button } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";

export const NoteCreateButton = () => {
  return (
    <Button
      leftIcon={<FaPlus />}
      variant={"solid"}
      colorScheme={"purple"}
      size="lg"
    >
      Create
    </Button>
  );
};
