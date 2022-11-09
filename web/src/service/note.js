import noteApi from "../api/apis/noteApi";

export const createNote = async ({ title, isTemplate, isPublic, tags }) => {
  await noteApi.post({ title, isTemplate, isPublic, tags });
};
