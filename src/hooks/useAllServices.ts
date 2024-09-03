import { getAllServices } from "@/queries";
import { useSearchQuery } from "@/store/service";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAllServices = () => {
  const params = useSearchQuery();
  return useSuspenseQuery({
    queryKey: ["services", params],
    queryFn: () => getAllServices(params),
  });
};
