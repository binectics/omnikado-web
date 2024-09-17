import { removeCartItem } from "@/actions/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: (res) => {
      console.log(res);
      toast.success(res.message, {
        containerId: "modal",
        position: "bottom-center",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
