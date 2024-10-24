import { createCart } from "@/actions/cart";
import { useUser } from "@/store/user";
import { Cart } from "@/types/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useLocalStorage } from "usehooks-ts";

export const useCreateCart = () => {
  const [sessionID, setSessionId] = useLocalStorage<string | null>(
    "sessionId",
    null
  );
  const queryClient = useQueryClient();
  const user = useUser();

  // Use UserId if Logged in instead of session ID
  // An issue is occuring here
  return useMutation({
    mutationFn: async () => {
      const existingCart = queryClient.getQueryData(["cart"]) as Cart;

      if (existingCart) {
        return existingCart;
      } else {
        let cartId;

        if (user) cartId = { userId: user.id };
        else cartId = { sessionId: nanoid() };

        const { data: cart } = await createCart({
          ...cartId,
          cartItems: [],
        });

        return cart;
      }
    },
    onSuccess: (cart) => setSessionId(cart.sessionID),
  });
};
