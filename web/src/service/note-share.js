const { noteApi } = require("../api/apis");

export const updatePermission = ({ userId, noteId, permission }) => {
  noteApi.updatePermission({ userId, noteId, permission });
};
