import { basePath } from "../../../next.config";
import { axiosClient } from "../axiosClient";

export const attachmentApi = {
  getAll: async (params) => {
    const url = "/attachment";
    return await axiosClient.get(url, { params });
  },
  get: async (id) => {
    const url = `/attachment/${id}`;
    return await axiosClient.get(url);
  },
  post: async (attachment) => {
    const url = `/attachment`;
    return await axiosClient.post(url, attachment);
  },
};
