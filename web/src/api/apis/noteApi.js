import { basePath } from "../../../next.config";
import { noteAdapter } from "../../utils/Adapter/noteAdapter";

const { default: axiosClient } = require("../axiosClient");

export const noteApi = {
  getAll: async (params) => {
    const url = "/note";
    const res = await axiosClient.get(url, { params });

    return res.map((note) =>
      noteAdapter.setNote(note).convertContentToBlock().getNote()
    );
  },
  get: async (id) => {
    const url = `/note/${id}`;
    const note = await axiosClient.get(url);
    return noteAdapter.setNote(note).convertContentToBlock().getNote();
  },
  post: async (note) => {
    const url = `/note`;
    return await axiosClient.post(url, note);
  },
};
