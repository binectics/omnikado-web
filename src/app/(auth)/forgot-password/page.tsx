"use client";

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import VerifyOTPForm from "@/components/forms/VerifyOTPForm";
import { useState } from "react";

type forms = "primary" | "reset" | "verify";

const ForgotPasswordPage = () => {
  const [currentForm, setCurrentForm] = useState<forms>("primary");

  const goToForm = (form: forms) => {
    setCurrentForm(form);
  };
  return currentForm === "primary" ? (
    <ForgotPasswordForm handlePage={() => goToForm("verify")} />
  ) : currentForm === "reset" ? (
    <ResetPasswordForm nextPage={() => goToForm("verify")} />
  ) : (
    <VerifyOTPForm nextPage={() => goToForm("reset")} />
  );
};

export default ForgotPasswordPage;
