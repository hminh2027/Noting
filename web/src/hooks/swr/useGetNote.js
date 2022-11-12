import useSWR, { mutate } from "swr";
import { noteApi } from "../../api/apis";

export function useGetNote() {
  const { data, error } = useSWR(`notes`, noteApi.getAll);

  return {
    notes: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useGetNoteById(id) {
  // const { data, error } = useSWR({ url: "note-id", id }, noteApi.get);
  const { data, error, mutate } = useSWR([id, "note-id"], noteApi.get);

  return {
    note: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
