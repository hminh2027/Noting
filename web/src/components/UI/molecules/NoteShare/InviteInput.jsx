import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { createShare } from "../../../../service/note-share";

export const InviteInput = ({ note }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      note,
    },
  });
  const onSubmit = (value) => {
    createShare(value);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between gap-4"
      >
        <Input size="sm" type="email" {...register("email")} />
        <Button vartiant="solid" colorScheme={"blue"} size="sm" type="submit">
          Invite
        </Button>
      </form>
    </div>
  );
};
