import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

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
        className={cn("min-h-screen bg-background font-primary antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
