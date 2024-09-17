"use client";
import { IResponse } from "@/types/auth";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError<IResponse>;
  }
}

export default function ReactQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 10 * 1000,
            gcTime: 5 * 60 * 1000,
          },
        },
        mutationCache: new MutationCache({
          onError: ({ response }) => {
            if (!response) {
              toast.error("Network Error");
            }
            const error = response?.data.error[0] ?? "Something Went Wrong";
            toast.error(error);
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
