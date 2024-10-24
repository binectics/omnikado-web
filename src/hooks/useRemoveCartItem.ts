import { removeCartItem } from "@/actions/cart";
import { Cart } from "@/types/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: (res) => {
      toast({
        title: res.message,
        variant: "destructive",
      });
    },
    onMutate: ({ itemId }) => {
      const oldCart = queryClient.getQueryData(["cart"]) as Cart;
      const newCartItems = oldCart?.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );

      queryClient.setQueryData<Cart>(["cart"], {
        ...oldCart,
        cartItems: newCartItems,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
