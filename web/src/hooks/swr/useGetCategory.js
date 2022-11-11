import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
import { categoryApi } from "../../api/apis";

export function useGetCategory() {
  const { data, error, mutate } = useSWR(`category-all`, categoryApi.getAll);
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useGetCategoryById(id) {
  const { data, error, mutate } = useSWR(
    [`category-id`, { id }],
    categoryApi.get
  );
  return {
    category: data,
    isLoading: !error && !data,
    isError: error,
  };
}
