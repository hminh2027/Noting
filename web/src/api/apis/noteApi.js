import { basePath } from "../../../next.config";
import { noteAdapter } from "../../utils/Adapter/noteAdapter";

const { default: axiosClient } = require("../axiosClient");

const noteApi = {
  getAll: async (params) => {
    const url = "/note";
    const res = await axiosClient.get(url, { params });

    return res.map((note) =>
      noteAdapter.setNote(note).convertContentToBlock().getNote()
    );
  },
  get: (id) => {
    const url = `/note/${id}`;
    return axiosClient.get(url);
  },
};

export default noteApi;
