"use client";

import { assets } from "@/assets";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/passwordInput";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(3, { message: "Minimum 3 letters" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

type SignUpFormData = z.infer<typeof schema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    router.push("/signup/verify");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-primary rounded-2xl p-5 w-full"
    >
      <button
        type="button"
        className="flex gap-x-3 items-center w-full py-[10px] bg-primary justify-center rounded-lg"
      >
        <Image src={assets.Google} width={24} height={24} alt="google icon" />
        <span className="font-semibold text-base font-primary text-black">
          Sign up with Google
        </span>
      </button>
      <div className="mt-5">
        <label
          htmlFor="name"
          className="text-primary font-primary font-medium text-sm"
        >
          Name
        </label>
        <Input
          {...register("name")}
          error={errors?.name?.message}
          id="name"
          type="text"
          placeholder="Enter your name"
          className="mt-[6px] bg-transparent rounded-lg"
        />
      </div>
      <div className="mt-5">
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
      <Button type="submit" className="rounded-lg py-[10px] w-full mt-6">
        <span className="font-semibold text-base text-primary">SignUp</span>
      </Button>
      <div className="mt-8 text-center">
        <p className="text-sm font-primary text-primary">
          <span>Already have an account?</span>
          <Link href="/login" className="ml-1 text-alternate font-semibold">
            Login
            <ChevronRightIcon
              strokeWidth={1.67}
              className="size-4 my-auto inline-block md:ml-2"
            />
          </Link>
        </p>
      </div>
    </form>
  );
}
