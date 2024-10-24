import { assets } from "@/assets";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { transitionVariants } from "@/lib/utils";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { useDebounceCallback } from "usehooks-ts";
import { z } from "zod";
import { Button } from "../ui/button";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

const schema = z.object({
  otp: z.string().length(6, { message: "Must be Exactly 6 digits" }),
});

type OTPFormData = z.infer<typeof schema>;

interface Props {
  email: string;
  onComplete: (token: string) => void;
  prevForm: () => void;
}

export default function VerifyOTPForm({ email, prevForm, onComplete }: Props) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<OTPFormData>({
    resolver: zodResolver(schema),
  });

  const { mutate: sendOTP } = useForgotPassword();

  const resendOTP = () => {
    sendOTP({ email });
  };

  const debouncedSendOTP = useDebounceCallback(resendOTP, 800);

  const onSubmit = (data: OTPFormData) => {
    console.log(data);
    onComplete(data.otp);
  };

  return (
    <motion.form
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
      onSubmit={handleSubmit(onSubmit)}
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
          <div className="my-8">
            <InputOTP
              value={field.value}
              onChange={field.onChange}
              maxLength={6}
            >
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTP>
          </div>
        )}
      />
      <Button
        type="submit"
        className="rounded-lg py-[10px] w-full font-semibold text-base text-primary"
        disabled={!isValid}
      >
        Continue
      </Button>
      <div className="mt-8 text-center">
        <p className="text-sm font-primary text-primary">
          Didn’t receive the email?
        </p>
        <Button
          variant="link"
          className="text-alternate font-semibold !text-sm text-center mt-1 italic !p-0 !m-0 !h-fit"
          onClick={debouncedSendOTP}
        >
          Resend code
        </Button>
        <div className="flex">
          <Link onClick={prevForm} href="/forgot-password">
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
          <Link href="/login" className="ml-auto">
            <div className="mt-6 flex items-center justify-center gap-x-1">
              <XMarkIcon width={20} height={20} stroke="#fff" strokeWidth={2} />
              <span className="font-semibold text-primary font-header text-sm">
                Cancel
              </span>
            </div>
          </Link>
        </div>
      </div>
    </motion.form>
  );
}
