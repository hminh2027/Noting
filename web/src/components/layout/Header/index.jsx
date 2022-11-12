import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import { logOut } from "../../../service/auth";
const Header = () => {
  return (
    <div className="flex p-4 bg-aqua-haze-50 justify-between">
      <div className="flex items-center">
        <InputGroup className="bg-white ">
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <Menu>
          <MenuButton
            className="bg-white"
            as={IconButton}
            aria-label="Options"
            icon={<FaCog />}
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={logOut}>Log out</MenuItem>
          </MenuList>
        </Menu>

        <div>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </div>
      </div>
    </div>
  );
};

export default Header;
