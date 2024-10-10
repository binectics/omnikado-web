import { addCartItem } from "@/actions/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useCreateCart } from "./useCreateCart";

interface NewCartItem {
  sourceCurrency: string;
  sourceAmount: number;
  productId: string;
  quantity: number;
}

export const useAddCartItem = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createCart } = useCreateCart();

  return useMutation({
    mutationFn: async (newItem: NewCartItem) => {
      const cart = await createCart();
      return addCartItem({ cartId: cart.id, newItem });
    },
    onSuccess: (res) => {
      toast.success(res.message, {
        containerId: "modal",
        position: "bottom-center",
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
