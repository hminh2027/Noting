import useSWR, { mutate } from "swr";
import noteApi from "../../api/apis/noteApi";

export function useGetNote(id) {
  const { data, error } = useSWR(`note`, noteApi.getAll);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useGetNoteById(id) {
  const { data, error } = useSWR([`note`, id], noteApi.get);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}
