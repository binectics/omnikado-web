import { AxiosError } from "axios";
import client from "./lib/axios";
import { Response } from "./queries";
import { LoginFormData } from "./components/forms/LoginForm";

interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  isAdmin: false;
  access_token: string;
}

export async function loginUser(payload: LoginFormData) {
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
