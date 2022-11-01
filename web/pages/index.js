import { NoteMainTemplate } from "../src/components/UI/template/Note";
import NoteTaking from "../src/components/UI/template/Note/NoteTaking";

export default function Home({ noteCategories, notes }) {
  return <NoteMainTemplate categories={noteCategories} notes={notes} />;
}
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
