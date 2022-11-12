import { basePath } from "../../../next.config";
import { noteAdapter } from "../../utils/Adapter";
import { showToast } from "../../utils/Toast";

import { axiosClient } from "../axiosClient";

export const noteApi = {
  getAll: async (params) => {
    const url = "/note";
    const res = await axiosClient.get(url, { params });

    return res.map((note) =>
      noteAdapter.setNote(note.note).convertContentToBlock().getNote()
    );
  },
  get: async ({ id }) => {
    const url = `/note/${id}`;
    const note = await axiosClient.get(url);
    return noteAdapter.setNote(note.note).convertContentToBlock().getNote();
  },
  post: async (note) => {
    const url = `/note`;
    axiosClient
      .post(url, note)
      .then(() => showToast("Note created successfully", "success"))
      .catch(() => showToast("Failed to create note", "error"));
  },
};
