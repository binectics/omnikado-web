import SuccessModal from "@/components/modals/SuccessModal";
import { toastConfig } from "@/lib/toast";
import { cn } from "@/lib/utils";
import ReactQueryClientProvider from "@/providers/QueryClientProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Omnikado",
  description: "Omnikado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-[100dvh] bg-background font-primary antialiased")}
      >
        <main className="mx-auto container px-8 overflow-x-hidden z-0 relative">
          <ReactQueryClientProvider>
            {children}
            <SuccessModal />
          </ReactQueryClientProvider>
          <ToastContainer {...toastConfig} containerId="normal" />
        </main>
      </body>
    </html>
  );
}
