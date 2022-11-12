import React from "react";
import { USER_PERMISSIONS } from "../../../../const";
import { PermissionRow } from "../../atoms/NoteShare";
export const PermissionList = ({ user }) => {
  return (
    <div className="flex flex-col gap-1">
      {Object.values(USER_PERMISSIONS).map((permission) => (
        <PermissionRow
          permission={permission}
          isActive={user.permission == permission.permission}
        />
      ))}
    </div>
  );
};
