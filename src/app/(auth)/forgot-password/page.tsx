"use client";

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import VerifyOTPForm from "@/components/forms/VerifyOTPForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FormData {
  email: string;
  token?: string;
}

enum FormType {
  ForgotPassword,
  VerifyOTP,
  ResetPassword,
}

const ForgotPasswordPage = () => {
  const [currentForm, setCurrentForm] = useState<FormType>(
    FormType.ForgotPassword
  );

  const [formData, setFormData] = useState<FormData>({ email: "" });

  const handleForm = (form: FormType) => setCurrentForm(form);

  const handleForgotPasswordComplete = (email: string) => {
    setFormData((prev) => ({ ...prev, email }));
    setCurrentForm(FormType.VerifyOTP);
  };

  const handleVerifyOTPComplete = (token: string) => {
    setFormData((prev) => ({ ...prev, token }));
    setCurrentForm(FormType.ResetPassword);
  };

  const handleResetPasswordComplete = () => {
    // Reset form data and return to initial state
    setFormData({ email: "" });
    setCurrentForm(FormType.ForgotPassword);
  };

  const getCurrentForm = () => {
    switch (currentForm) {
      case FormType.ForgotPassword:
        return <ForgotPasswordForm onComplete={handleForgotPasswordComplete} />;
      case FormType.VerifyOTP:
        return (
          <VerifyOTPForm
            prevForm={() => handleForm(FormType.ForgotPassword)}
            email={formData.email}
            onComplete={handleVerifyOTPComplete}
          />
        );
      case FormType.ResetPassword:
        return (
          <ResetPasswordForm
            prevForm={() => handleForm(FormType.VerifyOTP)}
            email={formData.email}
            token={formData.token!}
            onComplete={handleResetPasswordComplete}
          />
        );
    }
  };

  return <AnimatePresence mode="wait">{getCurrentForm()}</AnimatePresence>;
};

export default ForgotPasswordPage;
