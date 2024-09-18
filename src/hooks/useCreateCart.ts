import { createCart } from "@/actions/cart";
import { getCartById } from "@/queries";
import { Cart } from "@/types/cart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useLocalStorage } from "usehooks-ts";

export const  useCreateCart = () => {
  const [sessionId, setSessionId] = useLocalStorage<string | null>(
    "sessionId",
    null
  );

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (sessionId) {
        // Check if we already have the cart data in the cache
        const cachedCart = queryClient.getQueryData<Cart>(["cart"]);

        if (cachedCart) return cachedCart.id;
        else {
          // If no cached data, fetch the cart
          const cart = await queryClient.fetchQuery({
            queryKey: ["cart"],
            queryFn: () => getCartById({ sessionId }),
          });

          return cart.id;
        }
      }

      // create a new SessionId
      const newSessionId = nanoid();

      // If no sessionId, create a new cart
      const { data: cart } = await createCart({
        sessionId: newSessionId,
        cartItems: [],
      });

      setSessionId(newSessionId);

      return cart.id;
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });
};
