import { basePath } from "../../../next.config";
import { showToast } from "../../utils/Toast";
import { axiosClient } from "../axiosClient";

export const categoryApi = {
  getAll: async () => {
    const url = "/category";
    return await axiosClient.get(url);
    // return categoryAdapter.setCategory(res).convert().getCategory();
  },

  post: async (name) => {
    const url = `/category`;
    axiosClient
      .post(url, name)
      .then(() => showToast("Category created successfully!", "success"))
      .catch(() => showToast("Failed to create new category!", "error"));
  },
};
