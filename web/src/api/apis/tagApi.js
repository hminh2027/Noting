import { basePath } from "../../../next.config";

const { default: axiosClient } = require("../axiosClient");

export const tagApi = {
  getAll: async (params) => {
    const url = "/tag";
    return await axiosClient.get(url, { params });
  },
  get: async (id) => {
    const url = `/tag/${id}`;
    return await axiosClient.get(url);
  },
  post: async (tag) => {
    const url = `/tag`;
    return await axiosClient.post(url, tag);
  },
};
