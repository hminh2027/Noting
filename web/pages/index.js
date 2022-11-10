import { NoteMainTemplate } from "../src/components/UI/template/Note";
import { useGetNote } from "../src/hooks/swr";

export default function Home() {
  const { notes } = useGetNote();
  return <NoteMainTemplate notes={notes} />;
}
