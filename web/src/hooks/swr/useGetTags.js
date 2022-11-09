import useSWR, { mutate } from "swr";
import noteApi from "../../api/apis/noteApi";

export function useGetTag() {
  const { data, error } = useSWR(`tags`, noteApi.getAll);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useGetTagById(id) {
  const { data, error } = useSWR([`tag`, { id }], noteApi.get);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}
