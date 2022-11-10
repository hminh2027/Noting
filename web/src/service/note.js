import { noteApi } from "../api/apis";

export const createNote = async ({
  title,
  isTemplate,
  isPublic,
  tagsName,
  categoryId,
}) => {
  return await noteApi.post({
    title,
    isTemplate,
    isPublic,
    tagsName,
    categoryId,
  });
};
