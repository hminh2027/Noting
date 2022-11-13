import { noteApi } from "../api/apis";

export const createNote = async (note) => {
  return await noteApi.create(note);
};
export const patchNote = (note) => {
  return noteApi.patch(note);
};
