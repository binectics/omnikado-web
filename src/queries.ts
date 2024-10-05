import client from "@/lib/axios";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Service } from "./types/service";
import { IResponse } from "./types/auth";
import { Cart } from "./types/cart";

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
    const res = await client.get<IResponse<Service[]>>("/product", { params });
    return res.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function getAllCategories() {
  try {
    const res = await client.get<IResponse<string[]>>("/product/category");
    return res.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function getCartById(params?: any) {
  try {
    const res = await client.get<IResponse<Cart>>("/cart", {
      params,
    });
    return res.data.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function getProductById(productId: string) {
  try {
    const res = await client.get<IResponse<Service>>(`/product/${productId}`);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
