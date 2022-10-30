import { basePath } from "../../../next.config";

const { default: axiosClient } = require("../axiosClient");

const noteApi = {
  getAll: (params) => {
    const url = "/posts";
    return axiosClient.get(url, { params });
  },
  get: (params) => {
    const url = "/api/hello";
    return axiosClient.get(url, { params });
  },
};

export default noteApi;
