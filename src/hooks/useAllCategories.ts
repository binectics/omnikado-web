import { getAllCategories } from "@/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAllCategories = () => {
  return useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};
