import { basePath } from "../../../next.config";
import { categoryAdapter } from "../../utils/Adapter";

const { default: axiosClient } = require("../axiosClient");

export const categoryApi = {
  getAll: async () => {
    const url = "/category";
    const res = await axiosClient.get(url);
    return categoryAdapter.setCategory(res).convert().getCategory();
  },
  // get: async (id) => {
  //   const url = `/category/${id}`;
  //   return await axiosClient.get(url);
  // },
  post: async (category) => {
    const url = `/category`;
    return await axiosClient.post(url, category);
  },
};
