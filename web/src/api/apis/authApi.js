import { basePath } from "../../../next.config";
import { axiosClient } from "../axiosClient";

export const authApi = {
  signIn: async ({ email, password }) => {
    const url = "/auth/login";
    return await axiosClient.post(url, { email, password });
    // return authAdapter.setauth(res).convert().getauth();
  },

  signUp: async ({
    email,
    password,
    firstName,
    lastName,
    passwordConfirmation,
  }) => {
    const url = `/auth/register`;
    return await axiosClient.post(url, {
      email,
      password,
      firstName,
      lastName,
      passwordConfirmation,
    });
  },
};
