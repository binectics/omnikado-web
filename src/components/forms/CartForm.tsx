import useCheckout from "@/hooks/useCheckout";
import usePaystack from "@/hooks/usePaystack";
import { useModalActions } from "@/store/modal";
import { useUser } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HookConfig } from "react-paystack/dist/types";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useCompleteOrder from "@/hooks/useCompleteOrder";

const schema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export type FormData = z.infer<typeof schema>;

const config: HookConfig = {
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
};

interface Props {
  cartId: number;
  totalAmount: number;
}

export default function CartForm({ cartId, totalAmount }: Props) {
  const { closeModal } = useModalActions();
  const user = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate: completeOrder, isPending: isCompletingOrder } =
    useCompleteOrder();

  const onSuccess = (reference: string, orderId: string) => {
    console.log(reference);
    completeOrder(orderId, {
      onSettled: () => closeModal(),
    });
  };

  const onClose = () => {
    console.log("Paystack Closed");
  };

  const email = watch("email");

  const { mutate: startOrder, isPending } = useCheckout({
    amount: totalAmount,
    email,
    onSuccess,
    onClose,
  });

  const onSubmit = ({ email }: FormData) => {
    if (user) {
      const order = {
        email,
        cartId: +cartId,
        userId: +user.id,
        firstName: user?.firstName,
      };
      startOrder(order);
    } else router.push("/login");
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
      <Button
        type="submit"
        disabled={isPending || isCompletingOrder}
        className="w-full"
      >
        Checkout
      </Button>
    </form>
  );
}
