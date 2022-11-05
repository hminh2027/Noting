import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
const fetcher = async (key, params) => {
  const resp = await axiosClient.get(`/api/category/category`);
  console.log("From fetcher", resp);
  return resp;
};
export function useGetNoteCategory() {
  const { data, error } = useSWR(`note-category`, fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}
