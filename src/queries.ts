import client from "@/lib/axios";
import { AxiosError } from "axios";
import getQueryClient from "./lib/getQueryClient";
import { Service } from "./types/service";
import { QueryClient } from "@tanstack/react-query";

export interface Response<T> {
  data: T;
  error: string[];
  message: string;
  statusCode: number;
}

export async function prefetchAllServices(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: ["services"],
    queryFn: getAllServices,
  });
}

export async function prefetchAllCategories(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: ["services"],
    queryFn: getAllCategories,
  });
}

export async function getAllServices(params?: any) {
  try {
    const res = await client.get<Response<Service[]>>("/product", { params });
    return res.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function getAllCategories() {
  try {
    const res = await client.get<Response<string[]>>("/product/category");
    return res.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
