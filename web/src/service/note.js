import { noteApi } from "../api/apis";

export const createNote = async ({
  title,
  isTemplate,
  isPublic,
  tags,
  categoryId,
}) => {
  return await noteApi.post({ title, isTemplate, isPublic, tags, categoryId });
};
