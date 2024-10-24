import { addCartItem } from "@/actions/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCreateCart } from "./useCreateCart";
import { useToast } from "./use-toast";

interface NewCartItem {
  sourceCurrency: string;
  sourceAmount: number;
  productId: string;
  quantity: number;
}

export const useAddCartItem = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createCart } = useCreateCart();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (newItem: NewCartItem) => {
      const cart = await createCart();
      return addCartItem({ cartId: cart.id, newItem });
    },
    onSuccess: (res) => {
      toast({
        title: res.message,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
