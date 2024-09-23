import { getCartById } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";

export const useCart = () => {
  const [sessionId] = useLocalStorage<string | null>("sessionId", null);
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartById({ sessionId }),
    enabled: !!sessionId,
  });
};
