import useSWR, { mutate } from "swr";
import { tagApi } from "../../api/apis";
// import tagApi from "../../api/apis/tagApi";

export function useGetTag() {
  const { data, error } = useSWR(`tags`, tagApi.getAll);
  return {
    tags: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useGetTagById(id) {
  const { data, error } = useSWR([`tag`, { id }], tagApi.get);
  return {
    tags: data,
    isLoading: !error && !data,
    isError: error,
  };
}
