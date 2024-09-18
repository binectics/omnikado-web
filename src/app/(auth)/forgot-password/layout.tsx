import { assets } from "@/assets";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 h-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 md:gap-[72px] md:flex-row items-center md:items-start justify-center w-full">
        <header className="md:max-w-xs w-full text-center md:text-left">
          <a
            href="#"
            className="w-fit mx-auto md:mx-0 block relative -left-3 md:left-0"
          >
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              width={100}
              height={20}
              src={assets.OmnikadoLogo}
              alt="Omnikado Logo"
            />
          </a>
          <div className="mt-14 md:mt-8 font-header text-primary">
            <h1 className="font-semibold text-2xl md:text-3xl mb-2 md:mb-3">
              Forgot Password?
            </h1>
            <p className="text-base">
              Input your email here, a reset code <br /> will be sent to you
            </p>
          </div>
        </header>
        <div className="max-w-[400px] w-full">{children}</div>
      </div>
    </section>
  );
}
