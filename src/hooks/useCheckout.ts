import { checkout } from "@/actions/cart";
import { useMutation } from "@tanstack/react-query";
import { HookConfig } from "react-paystack/dist/types";
import usePaystack from "./usePaystack";

const config: HookConfig = {
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
};

interface Props {
  amount: number;
  email: string;
  onSuccess: (ref: any, orderId: string) => void;
  onClose: () => void;
}

const useCheckout = ({ amount, email, onSuccess, onClose }: Props) => {
  const initTransaction = usePaystack(config);

  return useMutation({
    mutationFn: checkout,
    onSuccess: (res) => {
      console.log(res.data);
      const orderId = res.data.id;

      initTransaction({
        config: {
          amount: amount * 100, // Convert from Kobo to Naira
          email: email,
          reference: new Date().getTime().toString(),
        },
        onSuccess: (ref) => onSuccess(ref, orderId),
        onClose,
      });
    },
  });
};

export default useCheckout;
