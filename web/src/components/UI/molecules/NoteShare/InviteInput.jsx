import { Button, Input } from "@chakra-ui/react";
import React from "react";

export const InviteInput = ({}) => {
  return (
    <div className="flex gap-2">
      <Input size="sm" />
      <Button vartiant="solid" colorScheme={"blue"} size="sm">
        Invite
      </Button>
    </div>
  );
};
