"use client";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function QueryErrorBoundary({
  children,
}: {
  children: ReactNode;
}) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="flex flex-col items-center mt-20 gap-y-3">
          <h2 className="text-primary font-primary text-center text-xl font-semibold">
            {error.message}
          </h2>
          <button
            className="px-5 py-1 font-primary rounded-md text-base bg-primary text-black font-bold"
            onClick={() => resetErrorBoundary()}
          >
            Try again
          </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
