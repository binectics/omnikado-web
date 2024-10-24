"use client";
import VerifyOTPForm from "@/components/forms/VerifyOTPForm";

export default function VerifySignUpPage() {
  return (
    <VerifyOTPForm
      onComplete={() => console.log("next Page")}
      email={""}
      prevForm={() => console.log("next Page")}
    />
  );
}
