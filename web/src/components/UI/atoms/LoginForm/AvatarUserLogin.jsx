import React from "react";
import { WrapItem, Avatar, Center } from "@chakra-ui/react";

const AvatarUserLogin = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Center>
        <Avatar
          size="2xl"
          name="Hmingduttt"
          src="https://bit.ly/sage-adebayo"
        />{" "}
      </Center>
    </div>
  );
};

export default AvatarUserLogin;
