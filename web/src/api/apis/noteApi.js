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
  get: async (id) => {
    const url = `/note/${id}`;
    const note = await axiosClient.get(url);
    return noteAdapter.setNote(note).convertContentToBlock().getNote();
  },
  create: (note) => {
    const url = `/note`;
    return axiosClient
      .post(url, note)
      .then(() => showToast("Note created successfully", "success"))
      .catch(() => showToast("Failed to create note", "error"));
  },
  patch: (note) => {
    const url = `/note/${note.id}`;
    return axiosClient
      .patch(url, note)
      .then(() => console.log("Note updated"))
      .catch(() => showToast("Can't update note", "error"));
  },
  updatePermission: ({ userId, noteId, permission }) => {
    const url = `/note/permission/update`;
    return axiosClient
      .patch(url, { userId, noteId, permission })
      .then(() => showToast("Permission updated successfully", "success"))
      .catch(() => showToast("Failed to update permission", "error"));
  },
};
