import { basePath } from "../../../next.config";

import { axiosClient } from "../axiosClient";

export const snapshotApi = {
  getAll: async (params) => {
    const url = "/snapshot";
    return await axiosClient.get(url, { params });
  },
  get: async (id) => {
    const url = `/snapshot/${id}`;
    return await axiosClient.get(url);
  },
  post: async (snapshot) => {
    const url = `/snapshot`;
    return await axiosClient.post(url, snapshot);
  },
};
