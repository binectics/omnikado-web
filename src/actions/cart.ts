import client from "@/lib/axios";
import { IResponse } from "@/types/auth";
import { Cart, Order } from "@/types/cart";
import { Service } from "@/types/service";
import axios, { AxiosError } from "axios";

export async function createCart(payload: any) {
  try {
    const res = await client.post<IResponse<Cart>>("/cart", payload);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function addCartItem({
  cartId,
  newItem,
}: {
  cartId: string;
  newItem: any;
}) {
  try {
    const res = await client.put<IResponse<Cart>>(`/cart/${cartId}/add-item`, {
      cartItems: [newItem],
    });
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function removeCartItem({
  cartId,
  itemId,
}: {
  cartId: number;
  itemId: string;
}) {
  try {
    const res = await client.put<IResponse<Cart>>(
      `/cart/${cartId}/remove-item`,
      {
        cartItemId: itemId,
      }
    );
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function checkout(payload: any) {
  try {
    const res = await axios.post<IResponse<Order>>(
      "/api/product/checkout",
      payload,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}

export async function completeOrder(orderId: string) {
  try {
    const res = await client.post<IResponse<any>>(
      `/product/order/${orderId}/complete-order`
    );
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
}
