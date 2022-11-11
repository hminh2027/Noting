import { noteApi } from "../api/apis";

export const createNote = async (note) => {
  return await noteApi.post(note);
};
