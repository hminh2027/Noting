import { NoteMainTemplate } from "../src/components/UI/template/Note";
import NoteTaking from "../src/components/UI/template/Note/NoteTaking";

export default function Home({ notes }) {
  return <NoteMainTemplate notes={notes} />;
}
export async function getServerSideProps(context) {
  const notesRes = await fetch("http://localhost:8080/api/note/note");
  const notes = await notesRes.json();

  return {
    props: { notes }, // will be passed to the page component as props
  };
}
