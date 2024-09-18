import { Button } from "@/components/ui/button";
import { PasswordInput } from "../ui/passwordInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type ResetPasswordData = z.infer<typeof schema>;

interface Props {
  nextPage: () => void;
}

export default function ResetPasswordForm({ nextPage }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ResetPasswordData) => {
    console.log(data);
  };

  return (
    <form
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
      <div className="mt-5">
        <label
          htmlFor="confirm-password"
          className="text-primary font-primary font-medium text-sm"
        >
          Confirm Password
        </label>
        <PasswordInput
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
          id="confirm-password"
          placeholder="Password"
          className="mt-[6px] placeholder:text-primary bg-transparent rounded-lg"
        />
      </div>
      <Button type="submit" className="rounded-lg py-[10px] w-full mt-6">
        <span className="font-semibold text-base text-primary">
          Reset Password
        </span>
      </Button>
    </form>
  );
}
