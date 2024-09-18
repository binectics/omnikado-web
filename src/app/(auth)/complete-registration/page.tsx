"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(/^(\+234|0)?[789][01]\d{8}$/);

const schema = z.object({
  name: z.string().min(3, { message: "Minimum 3 letters" }),
  phoneNo: z.string().regex(phoneRegex, { message: "Invalid Number" }),
});

type RegistrationData = z.infer<typeof schema>;

export default function CompleteRegistartionPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: RegistrationData) => {
    console.log(data);
    router.push("/complete-registration/verify");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-primary rounded-2xl p-5 w-full"
      >
        <p className="text-primary font-medium text-base font-primary">
          Personal Detail
        </p>
        <div className="mt-5">
          <label
            htmlFor="name"
            className="text-primary font-primary font-medium text-sm"
          >
            Full Name
          </label>
          <Input
            {...register("name")}
            error={errors?.name?.message}
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="mt-[6px] bg-transparent rounded-lg"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="phone"
            className="text-primary font-primary font-medium text-sm"
          >
            Phone
          </label>
          <Input
            {...register("phoneNo")}
            error={errors?.phoneNo?.message}
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            className="mt-[6px] bg-transparent rounded-lg"
          />
        </div>
        <Button type="submit" className="rounded-lg py-[10px] w-full mt-6">
          <span className="font-semibold text-base text-primary">Continue</span>
        </Button>
        <Link href="/signup">
          <div className="mt-6 flex items-center justify-center gap-x-1">
            <XMarkIcon width={20} height={20} stroke="#fff" strokeWidth={2} />
            <span className="font-semibold text-primary font-header text-sm">
              Cancel
            </span>
          </div>
        </Link>
      </form>
      <div className="mt-7">
        <p className="text-primary font-primary text-center text-sm">
          <span>By signing up you agree to our</span> <br />
          <a href="#" className="text-alternate">
            Terms of Service
          </a>
          <span className="mx-1">and</span>
          <a href="#" className="text-alternate">
            Privacy Policies
          </a>
        </p>
      </div>
    </>
  );
}
