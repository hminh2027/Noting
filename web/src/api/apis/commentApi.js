import { toast } from "react-toastify";
import { basePath } from "../../../next.config";
import { showToast } from "../../utils/Toast";

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
  post: (comment) => {
    const url = `/comment`;
    return axiosClient
      .post(url, comment)
      .then(() => console.log("Comment successfully"))
      .catch(() => showToast("Can't comment!", "error"));
  },
  getAllByNoteId: async (id) => {
    console.log(id);
    const url = `/comment/${id}`;
    return await axiosClient.get(url);
  },
};
