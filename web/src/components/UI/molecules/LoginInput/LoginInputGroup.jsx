import React from "react";
import {
  Input,
  Stack,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye, AiOutlineLock } from "react-icons/ai";
const LoginInputGroup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<VscAccount color="gray.300" />}
        />
        <Input type="tel" placeholder="Email Address" />
      </InputGroup>

      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Password"
        />
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineLock color="gray.300" />}
        />
        <InputRightElement width="3.5rem">
          <div class="cursor-pointer" onClick={handleClick}>
            {show ? <FaRegEyeSlash /> : <AiOutlineEye />}
          </div>
        </InputRightElement>
      </InputGroup>
      
      <div>
        <div class= "float-right">Forgot your password ?</div>
      </div>
    </Stack>
  );
};

export default LoginInputGroup;
