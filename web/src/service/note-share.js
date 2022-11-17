const { noteApi } = require("../api/apis");

export const updatePermission = ({ userId, noteId, permission }) => {
  noteApi.updateSharePermission({ userId, noteId, permission });
};
export const createShare = ({ email, note }) => {
  const { id: noteId } = note;
  noteApi.createShare({ email, noteId });
};
