import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import usePaystack from "@/hooks/usePaystack";
import { HookConfig } from "react-paystack/dist/types";
import { useModalActions } from "@/store/modal";

const schema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export type FormData = z.infer<typeof schema>;

const config: HookConfig = {
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
};

interface Props {
  totalAmount: number;
}

export default function CartForm({ totalAmount }: Props) {
  const { closeModal } = useModalActions();

  const onSuccess = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    closeModal();
  };

  const onClose = () => {
    console.log("Paystack Closed");
    closeModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const initTransaction = usePaystack(config);

  const onSubmit = ({ email }: FormData) => {
    initTransaction({
      config: {
        amount: totalAmount * 100,
        email: email,
        reference: new Date().getTime().toString(),
      },
      onSuccess,
      onClose,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex flex-col gap-y-6"
      action=""
    >
      <h2 className="font-header text-lg font-medium">Order Information</h2>
      <div>
        <Input
          {...register("email")}
          error={errors.email?.message}
          type="text"
          autoFocus={false}
          className="outline-none font-primary text-[#DBE0EB] placeholder:text-[#DBE0EB]"
          placeholder="Your Email"
        />
      </div>
      <Button type="button" variant={"alternate"} className="w-full">
        Apply
      </Button>
      <Button type="submit" className="w-full">
        Checkout
      </Button>
    </form>
  );
}
