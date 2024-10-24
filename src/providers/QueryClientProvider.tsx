"use client";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();

  const handleErrors = async (response: any) => {
    // Handle network errors
    if (!response) {
      toast({
        title: "Network Error",
        variant: "destructive",
      });
      return;
    }

    // Extract error messages and ensure it's always an array
    const errors = Array.isArray(response?.data?.message)
      ? response.data.message
      : [response?.data?.message ?? "Something Went Wrong"];

    // Display each error message with a delay
    for (const error of errors) {
      toast({
        title: error,
        variant: "destructive",
      });
      // Wait for 300ms before showing the next toast
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 10 * 60 * 1000,
            gcTime: 60 * 60 * 1000,
          },
        },
        mutationCache: new MutationCache({
          onError: (error) => {
            handleErrors(error.response);
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
