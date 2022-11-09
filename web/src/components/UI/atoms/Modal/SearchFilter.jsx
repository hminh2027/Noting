import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Input,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { IoTextOutline, IoDocumentOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPerson } from "react-icons/md";

const SearchFilter = () => {
  return (
    <HStack ml="4" spacing='12px'>
      <div>
        <Button
          height={6}
          leftIcon={<IoTextOutline />}
          fontSize="14px"
          borderRightRadius="12"
          variant="outline"
          pr="2"
          pl="2"
          
        >
          Only search titles
        </Button>
      </div>

      <div>
        <Menu>
          <MenuButton
            leftIcon={<MdPerson />}
            as={Button}
            rightIcon={<RiArrowDropDownLine />}
            fontSize="14px"
            borderRightRadius="12"
            height={6}
            pr="2"
            variant="outline"
            pl="2"
          >
            Created By
          </MenuButton>
          <MenuList>
            <MenuItem height={6} minH="20px">
              <Input placeholder="searchPeople" size="sm" />
            </MenuItem>
            <MenuItem pb={0} fontSize="14px" minH="10px" pt={4}>
              <Image
                boxSize="1.5rem"
                borderRadius="full"
                src="https://placekitten.com/120/120"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>Simon the pensive</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div>
        <Menu>
          <MenuButton
            leftIcon={<IoDocumentOutline />}
            as={Button}
            rightIcon={<RiArrowDropDownLine />}
            fontSize="14px"
            borderRightRadius="12"
            height={6}
            pr="2"
            variant="outline"
            pl="2"
          >
            In page
          </MenuButton>
          <MenuList>
            <MenuItem height={6} minH="20px">
              <Input placeholder="searchPeople" size="sm" />
            </MenuItem>
            <MenuItem
              pb={0}
              fontSize="14px"
              minH="20px"
              pt={4}
              icon={<IoDocumentOutline />}
            >
              <span>Simon the pensive</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div>
      <Button
          height={6}
        
          fontSize="14px"
          borderRightRadius="12"
          variant="outline"
         //  pr="2"
         //  pl="2"
          p="2"
        >
         <Input
        
          placeholder="Select Date and Time"
          size="m"
          type="datetime-local"
        />
        </Button>
        
      </div>
    </HStack>
  );
};

export default SearchFilter;
