"use client";

import { Button } from "@/components/ui/button";
import { useLoginUser } from "@/hooks/useLoginUser";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/passwordInput";

const schema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginFormData = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useLoginUser();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border md:border-none border-primary rounded-2xl p-5 w-full"
    >
      <div>
        <label
          htmlFor="email"
          className="text-primary font-primary font-medium text-sm"
        >
          Email
        </label>
        <Input
          {...register("email")}
          error={errors?.email?.message}
          id="email"
          type="text"
          placeholder="Enter your business email"
          className="mt-[6px] bg-transparent rounded-lg"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="password"
          className="text-primary font-primary font-medium text-sm"
        >
          Password
        </label>
        <PasswordInput
          {...register("password")}
          error={errors?.password?.message}
          id="password"
          placeholder="Enter password"
          className="mt-[6px] bg-transparent rounded-lg"
        />
      </div>
      <Button
        type="submit"
        className="rounded-lg py-[10px] w-full mt-6 font-semibold text-base text-primary"
      >
        {isPending ? <LoaderCircle className="animate-spin" /> : "Login"}
      </Button>
      <div className="mt-8 text-center">
        <p className="text-sm font-primary text-primary">
          <span>Already have an account?</span>
          <span className="ml-1 text-alternate font-semibold">
            Sign up
            <ChevronRightIcon
              strokeWidth={1.67}
              className="size-4 my-auto inline-block md:ml-2"
            />
          </span>
        </p>
        <Link
          href="/forgot-password"
          className="text-alternate font-semibold text-sm text-center mt-1"
        >
          Forgot Password?
        </Link>
      </div>
    </form>
  );
}
