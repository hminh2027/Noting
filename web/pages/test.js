import React, { useEffect, useState } from "react";
import ContentModal from "../src/components/UI/atoms/Modal/ContentModal";
import SearchFilter from "../src/components/UI/atoms/Modal/SearchFilter";
import SearchInput from "../src/components/UI/atoms/Modal/SearchInput";

const Test = () => {
  return (
     
      <div>
          <SearchInput></SearchInput>
          <SearchFilter></SearchFilter>
          <ContentModal/>
      </div>
  );
};

export default Test;