import { useQuery } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commentApi, noteApi } from "../../api/apis";
import { REACT_QUERY_KEYS } from "../../const/react-query-key";
import { postComment } from "../../service/comment";

export const useGetCommentByNoteId = (noteId) => {
  console.log(noteId);
  return useQuery([REACT_QUERY_KEYS.COMMENT_NOTE_ID], () =>
    commentApi.getAllByNoteId(noteId)
  );
};

export const useCommentByNoteIdMutation = (payload) => {
  return useMutation(() => postComment(payload));
};
