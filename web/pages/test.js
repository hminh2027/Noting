import React, { useEffect, useState } from "react";
import SearchFilter from "../src/components/UI/atoms/Modal/SearchFilter";
import SearchInput from "../src/components/UI/atoms/Modal/SearchInput";

const Test = () => {
  return (
     
      <div>
          <SearchInput></SearchInput>
          <SearchFilter></SearchFilter>
      </div>
  );
};

export default Test;