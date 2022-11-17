import { noteApi } from "../api/apis";
import { noteAdapter } from "../utils/Adapter";

export const restoreSnapshot = async (
  snapshot = {
    noteId: 2,
    title: "Mẫu TODO",
    content: `[{"id":"9SXPwlYVU6","type":"paragraph","data":{"text":"Dolor aute nostrud ex nulla officia tempor mollit et minim elit sint id pariatur sit. Velit nulla duis et minim do enim duis. Cillum incididunt magna ipsum dolore id ad cupidatat exercitation duis aliqua minim eu nisi. Sint fugiat aute officia nostrud voluptate voluptate. Aliqua quis ut aute velit do id occaecat est consectetur nostrud do qui aliquip minim."}},{"id":"1VXXh8tNE8","type":"paragraph","data":{"text":"Hello I'm editing this note at 7:58PM"}}]`,
  }
) => {
  const { noteId, title, content } = snapshot;
  const curNote = await noteApi.get(noteId);
  const patchableNote = noteAdapter
    .setNote(curNote)
    .setTitle(title)
    .setContent(content)
    .getPatchacbleNote();
  return noteApi.patch(patchableNote);
};
