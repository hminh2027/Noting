import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoTextOutline } from "react-icons/io5";
const SearchFilter = () => {
  return (
    <div>
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
          Only Search Title
        </Button>
      </div>

      <div>
         
      </div>
    </div>
  );
};

export default SearchFilter;
