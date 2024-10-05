import client from "@/lib/axios";
import { IResponse } from "@/types/auth";
import { Order } from "@/types/cart";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (token) {
    try {
      const body = await request.json();
      const { data } = await client.post<IResponse<Order>>(
        "/product/order/start-order",
        body
      );

      return NextResponse.json(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return NextResponse.json(error.response?.data || error.message, {
          status: error.response?.status || 500,
        });
      } else {
        return NextResponse.json("An unexpected error occurred", {
          status: 500,
        });
      }
    }
  }

  return NextResponse.json(
    { statusCode: 401, message: "Unauthorized", error: [], data: null },
    {
      status: 401,
    }
  );
}
