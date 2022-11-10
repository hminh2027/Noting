import React from "react";
import { USER_PERMISSIONS } from "../../../../const";
import { PermissionRow } from "../../atoms/NoteShare";
export const PermissionList = ({}) => {
  return (
    <div className="flex flex-col gap-1">
      {USER_PERMISSIONS.map((permission) => (
        <PermissionRow permission={permission} />
      ))}
    </div>
  );
};
