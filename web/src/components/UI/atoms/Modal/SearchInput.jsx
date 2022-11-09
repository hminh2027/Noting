import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color='gray.300' />}
        />
        <Input variant='flushed' placeholder="Searching..." />
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
