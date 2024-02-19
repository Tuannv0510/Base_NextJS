import http from "./httpClient";
import { LoginPayload, RegisterPayload, Tokens } from "./types/auth";
import { MktResponse } from "./types/response";
import { User } from "./types/user";

export const authApi = {
  login: async (payload: LoginPayload): Promise<Tokens> => {
    return http.post("/auth/login", payload);
  },
  register: async (payload: RegisterPayload): Promise<MktResponse<User>> => {
    return http.post("/auth/register", payload);
  },
  logout: async () => {
    return http.post("/auth/logout");
  },
  forgotPassword: async () => {
    return http.post("/auth/forgot-password");
  },
  resetPassword: async () => {
    return http.post("/auth/reset-password");
  },
  verifyToken: async ({
    token,
  }: {
    token: string;
  }): Promise<MktResponse<User>> => {
    return http.post("/auth/verify-token", { token });
  },
};
