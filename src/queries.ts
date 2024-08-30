import client from "@/lib/api";
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

export async function getAllServices() {
  try {
    const res = await client.get<Response<Service[]>>("/product");
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
