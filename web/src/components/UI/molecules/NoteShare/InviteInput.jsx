import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

export const InviteInput = ({}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (value) => {
    console.log(value);
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
