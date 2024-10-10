import { getProductById } from "@/queries";
import { IResponse } from "@/types/auth";
import { Service } from "@/types/service";
import { UseQueryResult, useQueries } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetProducts = (productIds: string[] = []) => {
  return useQueries({
    queries: productIds.map((productId) => ({
      queryKey: ["product", productId],
      queryFn: () => getProductById(productId),
      staleTime: Infinity,
      enabled: !!productId,
    })),
    combine: (result) => {
      return transformResult(result);
    },
  });
};

function transformResult(
  result: UseQueryResult<IResponse<Service>, AxiosError<IResponse<null>, any>>[]
) {
  return {
    logos: result.map((res) => res.data?.data.logoUrl),
    pending: result.map((res) => res.isPaused),
  };
}
