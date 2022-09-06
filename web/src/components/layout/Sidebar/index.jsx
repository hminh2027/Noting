import React from "react";
import MenuItem from "../../UI/atoms/MenuItem";
import { FaHome, FaUser, FaStickyNote, FaSignOutAlt } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen border-r border-r-gray-400 bg-aqua-haze-50 items-center w-40">
      <div className="text-4xl">Noting</div>
      <div>
        <ul className="flex flex-col gap-4">
          <li>
            <MenuItem icon={<FaHome />} text="Home" />
          </li>
          <li>
            <MenuItem icon={<FaStickyNote />} text="Notes" />
          </li>
          <li>
            <MenuItem icon={<FaUser />} text="User" />
          </li>
        </ul>
      </div>
      <div>
        <MenuItem icon={<FaSignOutAlt />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
