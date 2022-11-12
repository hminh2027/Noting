import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Switch,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
  AutoCompleteCreatable,
} from "@choc-ui/chakra-autocomplete";
import { useGetTag } from "../../../../hooks/swr";
import { createNote } from "../../../../service/note";
import { useSWRConfig } from "swr";
export const NoteCreate = ({ categoryId }) => {
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      isTemplate: false,
      isPublic: false,
      tagsName: [],
      categoryId,
      content: "",
    },
  });
  const { tags } = useGetTag();
  function onSubmit(values) {
    createNote(values);
    setTimeout(async () => {
      await mutate("category-all");
      await mutate("notes");
      await mutate("tags");
    }, 500);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.title} isRequired>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          {...register("title", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="isTemplate" mb="0" minWidth={"100px"}>
          Template?
        </FormLabel>
        <Controller
          name="isTemplate"
          control={control}
          render={({ field }) => (
            <Switch
              id="isTemplate"
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      </FormControl>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="isPublic" mb="0" minWidth={"100px"}>
          Public?
        </FormLabel>
        <Controller
          name="isPublic"
          control={control}
          render={({ field }) => (
            <Switch
              id="isPublic"
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="tagsName">Tags</FormLabel>
        <Controller
          name="tagsName"
          control={control}
          render={({ field }) => (
            <AutoComplete
              id="tagsName"
              {...field}
              creatable
              openOnFocus
              multiple
            >
              <AutoCompleteInput variant="outline">
                {({ tags }) =>
                  tags.map((tag, tid) => {
                    return (
                      <AutoCompleteTag
                        key={tid}
                        label={tag.label}
                        onRemove={tag.onRemove}
                      />
                    );
                  })
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {tags?.map((tag, cid, base) => {
                  if (cid !== base.length) {
                    return (
                      <AutoCompleteItem
                        key={`option-${cid}`}
                        value={tag.name}
                        textTransform="capitalize"
                        _selected={{ bg: "whiteAlpha.50" }}
                        _focus={{ bg: "whiteAlpha.100" }}
                      >
                        {tag.name}
                      </AutoCompleteItem>
                    );
                  }
                  return <AutoCompleteCreatable />;
                })}
              </AutoCompleteList>
            </AutoComplete>
          )}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};
