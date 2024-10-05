"use client";

import { AxiosError } from "axios";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: AxiosError & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>{error.message || "An unexpected error occurred."}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
