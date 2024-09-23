import { NextRequest, NextResponse } from "next/server";

interface Order {
  userId: 0;
  orderItems: [
    {
      productName: string;
      currency: string;
      price: number;
      quantity: number;
      productId: number;
      productSourcePlatform: string;
    }
  ];
}

interface OrderResponse {
  status: "pending";
  totalAmount: 0;
  providerResponse: {};
  user: {
    firstName: string;
    lastName: string;
    othername: string;
    username: string;
    phoneNumber: string;
    profilePicture: string;
    dateOfBirth: string;
    isPhoneNumberVerified: boolean;
    phoneNumberVerifiedAt: string;
    email: string;
    isEmailVerified: boolean;
    emailVerifiedAt: string;
    password: string;
    acceptTos: boolean;
    lastLogin: string;
    isAdmin: boolean;
    id: number;
    createdAt: string;
    updatedAt: string;
  };
  items: [
    {
      productName: "Mastercard";
      currency: "USD";
      price: 1000;
      quantity: 1;
      productId: 220;
      productSourcePlatform: "ozchest";
    }
  ];
  id: 0;
  createdAt: string;
  updatedAt: string;
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (token) return NextResponse.json(token);

  return NextResponse.json(
    { statusCode: 401, message: "Unauthorized" },
    {
      status: 401,
    }
  );
}
