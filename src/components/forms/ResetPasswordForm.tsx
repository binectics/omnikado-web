import { Button } from "@/components/ui/button";
import { useResetPassword } from "@/hooks/useResetPassword";
import { transitionVariants } from "@/lib/utils";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "../ui/passwordInput";

const schema = z.object({
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one capital letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" }),
});

type ResetPasswordData = z.infer<typeof schema>;

interface Props {
  email: string;
  token: string;
  onComplete: () => void;
  prevForm: () => void;
}

export default function ResetPasswordForm({
  email,
  token,
  onComplete,
  prevForm,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(schema),
  });

  const { mutate: resetPassword, isPending } = useResetPassword();

  const onSubmit = (data: ResetPasswordData) => {
    const payload = {
      email,
      resetToken: token,
      newPassword: data.password,
    };

    console.log(payload);

    resetPassword(payload, {
      onSuccess: () => onComplete(),
    });
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
      <div>
        <label
          htmlFor="new-password"
          className="text-primary font-primary font-medium text-sm"
        >
          New Password
        </label>
        <PasswordInput
          {...register("password")}
          error={errors.password?.message}
          id="new-password"
          placeholder="Password"
          className="mt-[6px] placeholder:text-primary bg-transparent rounded-lg"
        />
      </div>
      <Button
        type="submit"
        className="rounded-lg py-[10px] w-full mt-6"
        disabled={isPending}
      >
        <span className="font-semibold text-base text-primary">
          Reset Password
        </span>
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
    </motion.form>
  );
}
