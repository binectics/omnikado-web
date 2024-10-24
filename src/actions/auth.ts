import { ForgotPasswordForm } from "@/components/forms/ForgotPasswordForm";
import { LoginFormData } from "@/components/forms/LoginForm";
import client from "@/lib/axios";
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

export async function forgotPassword(payload: ForgotPasswordForm) {
  try {
    const res = await client.post<IResponse>("/auth/password/forgot", payload);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function resetPassword(payload: any) {
  try {
    const res = await client.post<IResponse>("/auth/password/reset", payload);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
