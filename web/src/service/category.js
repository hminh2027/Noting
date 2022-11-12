import { categoryApi } from "../api/apis";
export const createCategory = (name) => {
  categoryApi.post(name);
};
