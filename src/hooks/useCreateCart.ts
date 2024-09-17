import { createCart } from "@/actions/cart";
import { useMutation } from "@tanstack/react-query";

export const useCreateCart = () => {
  return useMutation({
    mutationFn: createCart,
    onSuccess: (res) => {
      console.log(res);
    },
  });
};
