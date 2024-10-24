import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { motion } from "framer-motion";
import { transitionVariants } from "@/lib/utils";

interface Props {
  onComplete: (email: string) => void;
}

const schema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordForm = z.infer<typeof schema>;

export default function ForgotPasswordForm({ onComplete }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(schema),
  });

  const { mutate: sendOTP, isPending } = useForgotPassword();

  const onSubmit = (data: ForgotPasswordForm) => {
    console.log(data);
    sendOTP(data, { onSuccess: () => onComplete(data.email) });
  };
  return (
    <motion.form
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
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
          id="email"
          type="text"
          error={errors.email?.message}
          placeholder="Enter your email"
          className="mt-[6px] placeholder:text-primary bg-transparent rounded-lg"
        />
      </div>
      <Button
        type="submit"
        className="rounded-lg py-[10px] w-full mt-6"
        disabled={isPending}
      >
        <span className="font-semibold text-base text-primary">Continue</span>
      </Button>
    </motion.form>
  );
}
