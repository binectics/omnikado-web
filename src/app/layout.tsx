import Footer from "@/components/Footer";
import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import Modal from "@/components/ModalContainer";
import GiftCardModal from "@/components/modals/GiftCardModal";
import CartModal from "@/components/modals/CartModal";

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
          <MainNav />
          {children}
          <GiftCardModal />
          <CartModal />
          <Footer />
        </main>
      </body>
    </html>
  );
}
