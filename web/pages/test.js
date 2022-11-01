import React, { useEffect, useState } from "react";
import { NoteMainTemplate } from "../src/components/UI/template/Note/";

const Test = ({ noteCategories, notes }) => {
  return <NoteMainTemplate categories={noteCategories} notes={notes} />;
};
export async function getServerSideProps(context) {
  const notesRes = await fetch("http://localhost:8080/api/note/note");
  const notes = await notesRes.json();
  const noteCategoriesRes = await fetch(
    "http://localhost:8080/api/category/category"
  );
  const noteCategories = await noteCategoriesRes.json();
  return {
    props: { notes, noteCategories }, // will be passed to the page component as props
  };
}
export default Test;
