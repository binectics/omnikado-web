import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { MainNav } from "@/components/main-nav";

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
        <main className="mx-auto container max-w-[1280px]">
          <MainNav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
