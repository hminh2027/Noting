import { categoryApi, noteApi } from "../api/apis";
export const createCategory = (name) => {
  categoryApi.post(name);
};
export const getSharedNote = async () => {
  const notes = await noteApi.getShared();
  return notes;
};
