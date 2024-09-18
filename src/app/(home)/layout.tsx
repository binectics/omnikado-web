import Footer from "@/components/Footer";
import { MainNav } from "@/components/main-nav";
import "@/styles/globals.css";
import dynamic from "next/dynamic";

const GiftCardModal = dynamic(
  () => import("@/components/modals/GiftCardModal")
);

const CartModal = dynamic(() => import("@/components/modals/CartModal"), {
  ssr: false,
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNav />
      {children}
      <GiftCardModal />
      <CartModal />
      <Footer />
    </>
  );
}
