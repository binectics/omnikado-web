import { getAllServices } from "@/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAllServices = () => {
  return useSuspenseQuery({
    queryKey: ["services"],
    queryFn: getAllServices,
  });
};
