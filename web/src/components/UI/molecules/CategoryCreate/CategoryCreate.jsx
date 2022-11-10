import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { createCategory } from "../../../../service/category";
import { useSWRConfig } from "swr";

export const CategoryCreate = () => {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values) => {
    await createCategory(values);
    mutate("category-all");
  };
  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} isRequired>
          <FormLabel htmlFor="name">Category name</FormLabel>
          <Input
            id="name"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
