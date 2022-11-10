import React, { useEffect, useState } from "react";
import { Spacer, InputGroup, InputLeftElement, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { CgFileDocument } from "react-icons/cg";
import { IoReturnDownBackSharp } from "react-icons/io5"
const ContentModal = ({className}) => {
  return (
    <div className={`${className}`}>
      <Text pb="8px" fontSize='md'>Today</Text>   

      <HStack  bg='gray.300'  height={10}>
         <Icon as={CgFileDocument}/>
         <Text pr="1500px" pl="10px" fontSize='md'>Getting Started</Text>   
         <Icon  as={IoReturnDownBackSharp}></Icon>
      </HStack>
    </div>
  );
};

export default ContentModal;
