import { basePath } from "../../../next.config";

const { default: axiosClient } = require("../axiosClient");

export const categoryApi = {
  getAll: async (params) => {
    const url = "/category";
    return await axiosClient.get(url, { params });
  },
  get: async (id) => {
    const url = `/category/${id}`;
    return await axiosClient.get(url);
  },
  post: async (category) => {
    const url = `/category`;
    return await axiosClient.post(url, category);
  },
};
