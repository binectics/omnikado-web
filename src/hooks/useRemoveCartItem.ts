import { removeCartItem } from "@/actions/cart";
import { Cart } from "@/types/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: (res) => {
      toast.success(res.message, {
        containerId: "modal",
        position: "bottom-center",
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
