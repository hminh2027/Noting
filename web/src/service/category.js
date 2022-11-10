import { categoryApi } from "../api/apis";
export const createCategory = async (name) => {
  await categoryApi.post(name);
};
