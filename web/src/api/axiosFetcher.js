import axios from "axios";
import { parse, stringify } from "qs";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosFetcher = axios.create({
  baseURL: process.env.EXAMPLE_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

axiosFetcher.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosFetcher.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosFetcher;
