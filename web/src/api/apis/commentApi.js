import { basePath } from "../../../next.config";

import { axiosClient } from "../axiosClient";

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
  getAllByNoteId: async (id) => {
    console.log(id);
    const url = `/comment/${id}`;
    return await axiosClient.get(url);
  },
};
