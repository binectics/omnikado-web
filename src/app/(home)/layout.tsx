import Footer from "@/components/Footer";
import { MainNav } from "@/components/main-nav";
import CartModal from "@/components/modals/CartModal";
import GiftCardModal from "@/components/modals/GiftCardModal";
import "@/styles/globals.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
      <GiftCardModal />
      <CartModal />
    </>
  );
}
