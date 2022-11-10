import React from "react";
import { Button, ButtonGroup, WrapItem } from "@chakra-ui/react";
const ButtonLogin = ({ onClick }) => {
  return (
    <div className="py-4">
      <Button
        colorScheme="orange"
        variant="solid"
        width="100%"
        borderRadius="20px"
        borderColor="none"
        onClick={onClick}
      >
        Login
      </Button>
      <div className="pt-4 text-center">Create new account</div>
    </div>
  );
};

export default ButtonLogin;
