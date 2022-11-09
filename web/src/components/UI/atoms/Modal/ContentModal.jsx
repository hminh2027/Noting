import React, { useEffect, useState } from "react";
import { Spacer, InputGroup, InputLeftElement, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { CgFileDocument } from "react-icons/cg";
import { IoReturnDownBackSharp } from "react-icons/io5"
const ContentModal = ({className}) => {
  return (
    <div className={`${className}`}>
      <div>
        <p>Today</p>
      </div>

      <HStack bg='gray.300'  height={10}>
         <Icon as={CgFileDocument}/>
         <Text pr="1550px" pl="10px" fontSize='md'>Getting Started</Text>   
         <Icon  as={IoReturnDownBackSharp}></Icon>
      </HStack>
    </div>
  );
};

export default ContentModal;
