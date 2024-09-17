import { LoginFormData } from "@/components/forms/LoginForm";
import { IResponse, User } from "@/types/auth";
import axios, { AxiosError } from "axios";

export async function loginUser(payload: LoginFormData) {
  try {
    const res = await axios.post<IResponse<User>>("/api/auth/login", payload, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
