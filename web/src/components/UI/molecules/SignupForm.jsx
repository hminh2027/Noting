import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { useForm } from 'react-hook-form'
import {
  Input,
  Button,
  FormLabel,
  FormHelperText,
  FormControl,
  FormErrorMessage,
  RadioGroup,
  Stack,
  Radio,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Textarea,
  PinInput,
  PinInputField,
  Checkbox,
  CheckboxGroup
} from "@chakra-ui/react";
import "./styles.css";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  const [submittedVal, setSubmittedVal] = useState();
  const onSubmit = (data) => {
    setSubmittedVal(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="email" isInvalid={errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          {...register("email", {
            required: { value: true, message: "This is required." }
          })}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl id="lastName" isInvalid={errors.lastName}>
        <FormLabel>Last name</FormLabel>
        <Input
          {...register("lastName", {
            required: { value: true, message: "This is required." }
          })}
        />
        <FormHelperText>We'll never share your last name.</FormHelperText>
        <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>Options</FormLabel>
        <Select {...register("options")} placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Number</FormLabel>

        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <NumberInput {...field}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Slider</FormLabel>

        <Controller
          name="slider"
          control={control}
          render={({ field }) => (
            <Slider {...field} aria-label="slider-ex-1" defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          )}
        />
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Controller
          name="switch"
          control={control}
          render={({ field }) => (
            <Switch
              id="email-alerts"
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      </FormControl>

      <FormControl id="position" isInvalid={errors.position}>
        <FormLabel>Position</FormLabel>
        <Controller
          name="position"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack direction="row">
                <Radio value="1">First</Radio>
                <Radio value="2">Second</Radio>
                <Radio value="3">Third</Radio>
              </Stack>
            </RadioGroup>
          )}
          rules={{
            required: { value: true, message: "This is required." }
          }}
        />
        <FormErrorMessage>{errors.position?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <Controller
          name="pin"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <PinInput otp {...rest}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          )}
          rules={{
            required: { value: true, message: "This is required." }
          }}
        />
      </FormControl>

      <FormControl>
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
            >
              Checkbox
            </Checkbox>
          )}
        />
      </FormControl>

      <FormControl>
        <Controller
          name="checkboxs"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <CheckboxGroup {...rest}>
              <Checkbox value="first">first</Checkbox>
              <Checkbox value="second">second</Checkbox>
              <Checkbox value="last">last</Checkbox>
            </CheckboxGroup>
          )}
        />
      </FormControl>

      <FormControl>
        <Textarea
          {...register("textarea")}
          placeholder="Here is a sample placeholder"
        />
      </FormControl>

      <Button type="submit">Submit</Button>
      {submittedVal && (
        <div>
          Submitted Data:
          <br />
          {JSON.stringify(submittedVal)}
        </div>
      )}
    </form>
  );
}
