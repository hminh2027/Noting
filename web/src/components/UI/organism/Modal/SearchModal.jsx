import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import {} from "react-icons/fa";
import ContentModal from "../../atoms/Modal/ContentModal";
import SearchFilter from "../../atoms/Modal/SearchFilter";
import SearchInput from "../../atoms/Modal/SearchInput";

const SearchModal = () => {
  return (
    <div className="px-[20px] border-solid border-2 border-black-500 pb-2">
      <SearchInput/>
      <SearchFilter />
      <ContentModal className=""/>
    </div>
  );
};
export default SearchModal;
