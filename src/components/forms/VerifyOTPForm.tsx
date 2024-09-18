import { assets } from "@/assets";
import Image from "next/image";
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { Button } from "../ui/button";
import OtpInput, { AllowedInputTypes } from "react-otp-input";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  otp: z.string().regex(/^\d{4}$/, "OTP must be exactly 4 digits"),
});

type OTPFormData = z.infer<typeof schema>;

interface Props {
  nextPage: () => void;
}

export default function VerifyOTPForm({ nextPage }: Props) {
  const { control, handleSubmit } = useForm<OTPFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: OTPFormData) => {
    console.log(data);
    nextPage();
  };

  const handleError = (errors: FieldErrors) => {
    alert(errors["otp"]?.message);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, handleError)}
      className="border border-primary rounded-2xl p-5 w-full"
    >
      <Image
        src={assets.Email}
        width={56}
        height={56}
        className="mx-auto"
        alt=""
      />
      <div className="mt-6 font-primary text-primary text-center">
        <h2 className="text-2xl font-semibold">Check your email</h2>
        <p className="mt-2 text-base">
          Enter the reset code sent to your email
        </p>
      </div>
      <Controller
        name="otp"
        control={control}
        render={({ field }) => (
          <OtpInput
            {...field}
            value={field.value}
            onChange={field.onChange}
            numInputs={4}
            placeholder="0000"
            inputStyle="!w-full focus-visible:outline-none text-primary border-2 rounded-lg border-input h-full bg-transparent text-5xl text-center font-medium font-primary"
            containerStyle="flex gap-x-3 relative w-full justify-center h-20 my-8"
            renderInput={(props) => <input {...props} />}
          />
        )}
      />
      <Button type="submit" className="rounded-lg py-[10px] w-full">
        <span className="font-semibold text-base text-primary">Verify</span>
      </Button>
      <div className="mt-8 text-center">
        <p className="text-sm font-primary text-primary">
          Didn’t receive the email?
        </p>
        <p className="text-alternate font-semibold text-sm text-center mt-1 italic">
          Resend code
        </p>
      </div>
    </form>
  );
}
