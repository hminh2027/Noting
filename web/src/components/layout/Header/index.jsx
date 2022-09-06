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
const Header = () => {
  return (
    <div className="flex p-4 bg-aqua-haze-50 justify-between">
      <div>
        <InputGroup className="bg-white ">
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </div>
      <div className="flex justify-between w-48">
        <div className="flex gap-4">
          <IconButton
            variant="outline"
            className="bg-white"
            aria-label="Search database"
            icon={<FaBell />}
          />
          <Menu>
            <MenuButton
              className="bg-white"
              as={IconButton}
              aria-label="Options"
              icon={<FaCog />}
              variant="outline"
            />
            <MenuList>
              <MenuItem command="⌘T">New Tab</MenuItem>
              <MenuItem command="⌘N">New Window</MenuItem>
              <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
              <MenuItem command="⌘O">Open File...</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </div>
      </div>
    </div>
  );
};

export default Header;
