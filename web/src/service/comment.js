import { commentApi } from "../api/apis";

export const postComment = (commentPayload) => {
  commentApi.post(commentPayload);
};
