import React, { useEffect, useState } from "react";
import { NoteActivityList } from "../src/components/UI/organism/NoteActivity";
import { useGetNote } from "../src/hooks/swr";
const Test = () => {
  const { notes, isLoading, isError } = useGetNote();
  console.log({ notes, isLoading, isError });
  return <NoteActivityList />;
};

export default Test;
