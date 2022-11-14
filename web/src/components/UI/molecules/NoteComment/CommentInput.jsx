import { Avatar, Button, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { REACT_QUERY_KEYS } from "../../../../const/react-query-key";
import { postComment } from "../../../../service/comment";

export const CommentInput = ({ noteId }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: "",
      noteId,
    },
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (value) => postComment(value),
    onSuccess: () => {
      setTimeout(
        () =>
          queryClient.invalidateQueries({
            queryKey: [REACT_QUERY_KEYS.COMMENT_NOTE_ID],
          }),
        100
      );
    },
  });
  const onSubmit = (value) => {
    mutation.mutate(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Avatar size="sm" />
      <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <Input
            required
            {...register("content", {
              minLength: 2,
            })}
          />
          <Button colorScheme={"teal"} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
