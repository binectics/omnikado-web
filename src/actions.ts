import { AxiosError } from "axios";
import client from "./lib/api";
import { Response } from "./queries";

interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  isAdmin: false;
  access_token: string;
}

export async function loginUser(payload: { email: string; password: string }) {
  try {
    const res = await client.post<Response<UserResponse>>(
      "/auth/login",
      payload
    );
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
