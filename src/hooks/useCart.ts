import { getCartById } from "@/queries";
import { useQuery } from "@tanstack/react-query";

export const useCart = (sessionId: string | null) => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartById({ sessionId }),
    enabled: !!sessionId,
  });
};
