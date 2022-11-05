import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
const fetcher = async (key, params) => {
  const resp = await axiosClient.get(`/api/note/note`);
  console.log("From fetcher", resp);
  return resp;
};
export function useGetNote(id) {
  const { data, error } = useSWR(`note`, fetcher);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}
