import { basePath } from "../../../next.config";
import { axiosClient } from "../axiosClient";

export const categoryApi = {
  getAll: async () => {
    const url = "/category";
    return await axiosClient.get(url);
    // return categoryAdapter.setCategory(res).convert().getCategory();
  },

  post: async (name) => {
    const url = `/category`;
    return await axiosClient.post(url, name);
  },
};
