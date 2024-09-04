"use client";

import { Button } from "@/components/ui/button";
import { ModalType, useModalActions } from "@/store/modal";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { z } from "zod";

const schema = z.object({
  otp: z.string().regex(/^\d{4}$/, "OTP must be exactly 4 digits"),
});

type OTPFormData = z.infer<typeof schema>;

export default function VerifyPhoneNumberPage() {
  const { control, handleSubmit } = useForm<OTPFormData>({
    resolver: zodResolver(schema),
  });

  const { openModal } = useModalActions();

  const onSubmit = (data: OTPFormData) => {
    console.log(data);
    openModal(ModalType.Success);
  };

  const handleError = (errors: FieldErrors) => {
    alert(errors["otp"]?.message);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, handleError)}
      className="border border-primary rounded-2xl p-5 w-full"
    >
      <header className="font-primary text-primary text-center">
        <h2 className="text-2xl text-[26px] font-semibold">
          Verify your phone number
        </h2>
        <p className="mt-5 text-sm">
          Enter the One-Time-Pin we sent to your phone number
        </p>
      </header>
      <div className="mb-6">
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
              containerStyle="flex gap-x-3 relative w-full justify-center h-20 mt-6"
              renderInput={(props) => <input {...props} />}
            />
          )}
        />
        <Button
          type="button"
          variant={"link"}
          className="p-0 mx-auto w-full mt-[6px] h-fit"
        >
          <a className="text-alternate text-sm text-center">Resend Code</a>
        </Button>
      </div>
      <Button type="submit" className="rounded-lg py-[10px] w-full">
        <span className="font-semibold text-base text-primary">Continue</span>
      </Button>
      <div className="flex">
        <Link href="/complete-registration">
          <div className="mt-6 flex items-center justify-center gap-x-1">
            <ArrowLeftIcon
              width={20}
              height={20}
              stroke="#fff"
              strokeWidth={2}
            />
            <span className="font-semibold text-primary font-header text-sm">
              Back
            </span>
          </div>
        </Link>
        <Link href="/signup" className="ml-auto">
          <div className="mt-6 flex items-center justify-center gap-x-1">
            <XMarkIcon width={20} height={20} stroke="#fff" strokeWidth={2} />
            <span className="font-semibold text-primary font-header text-sm">
              Cancel
            </span>
          </div>
        </Link>
      </div>
    </form>
  );
}
