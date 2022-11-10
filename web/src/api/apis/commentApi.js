import { basePath } from "../../../next.config";

const { default: axiosClient } = require("../axiosClient");

export const commentApi = {
  getAll: async (params) => {
    const url = "/comment";
    return await axiosClient.get(url, { params });
  },
  get: async (id) => {
    const url = `/comment/${id}`;
    return await axiosClient.get(url);
  },
  post: async (comment) => {
    const url = `/comment`;
    return await axiosClient.post(url, comment);
  },
};
