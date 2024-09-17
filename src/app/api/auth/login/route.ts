import client from "@/lib/axios";
import { IResponse, User } from "@/types/auth";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

interface UserWithToken extends User {
  access_token: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data: loginResponse } = await client.post<IResponse<UserWithToken>>(
      "/auth/login",
      body
    );

    const { access_token, ...userWithoutToken } = loginResponse.data;
    const responseBody = { ...loginResponse, data: userWithoutToken };

    const response = NextResponse.json(responseBody);

    response.cookies.set("access_token", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600, // 1 hour in seconds
      path: "/",
    });

    return response;
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
