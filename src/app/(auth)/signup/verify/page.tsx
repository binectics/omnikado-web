"use client";
import VerifyOTPForm from "@/components/forms/VerifyOTPForm";

export default function VerifySignUpPage() {
  return <VerifyOTPForm nextPage={() => console.log("next Page")} />;
}
