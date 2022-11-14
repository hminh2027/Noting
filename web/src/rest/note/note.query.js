import { useQuery } from "@chakra-ui/react";
import { noteApi } from "../../api/apis";
import { REACT_QUERY_KEYS } from "../../const/react-query-key";

export const useGetNotes = () => {
  return useQuery([REACT_QUERY_KEYS.NOTE_ALL], noteApi.getAll());
};
export const useGetNoteById = (id) => {
  return useQuery([REACT_QUERY_KEYS.NOTE_ID, id], () => noteApi.get(id));
};
