import { createCart } from "@/actions/cart";
import { Cart } from "@/types/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useLocalStorage } from "usehooks-ts";

export const useCreateCart = () => {
  const [sessionId, setSessionId] = useLocalStorage<string | null>(
    "sessionId",
    null
  );
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (sessionId) {
        return queryClient.getQueryData(["cart"]) as Cart;
      }

      // create a new SessionId
      const newSessionId = nanoid();
      // If no sessionId, create a new cart
      const { data: cart } = await createCart({
        sessionId: newSessionId,
        cartItems: [],
      });

      setSessionId(newSessionId);

      return cart;
    },
  });
};
