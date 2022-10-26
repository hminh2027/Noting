import React, { useEffect } from "react";
import productApi from "../src/api/apis/productApi";

import dynamic from "next/dynamic";
const Test = () => {
  //Remember to import the dynamic from Nextjs
  const NoteEditor = dynamic(() => import("../src/components/Editor"), {
    ssr: false,
  });
  return (
    <div>
      <NoteEditor />
    </div>
  );
};

export default Test;
