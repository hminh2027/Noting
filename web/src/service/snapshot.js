import { noteApi } from "../api/apis";
import { noteAdapter } from "../utils/Adapter";

export const restoreSnapshot = async (snapshot) => {
  const { noteId, title, content } = snapshot;
  const curNote = await noteApi.get(noteId);
  const patchableNote = noteAdapter
    .setNote(curNote)
    .setTitle(title)
    .setContent(content)
    .getPatchacbleNote();
  return noteApi.patch(patchableNote);
};
