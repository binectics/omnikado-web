import Footer from "@/components/Footer";
import { MainNav } from "@/components/main-nav";
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
    </>
  );
}
