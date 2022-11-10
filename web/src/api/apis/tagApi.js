import { basePath } from "../../../next.config";

import { axiosClient } from "../axiosClient";

export const tagApi = {
  getAll: async () => {
    const url = "/tag";
    return await axiosClient.get(url);
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
