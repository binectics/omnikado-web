import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import { assets } from "@/assets";

export default function LoginPage() {
  return (
    <section className="py-12 h-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 md:gap-16 md:flex-row items-center md:items-start justify-center w-full">
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
            <h1 className="font-bold text-2xl md:text-3xl mb-2 md:mb-3">
              Welcome back!
            </h1>
            <p className="text-base">
              Log into your account to access <br /> your dashboard.
            </p>
          </div>
        </header>
        <div className="max-w-[400px] w-full">
          <LoginForm />
          <div className="mt-8">
            <p className="text-primary font-primary text-center text-sm">
              <span>By signing up you agree to our</span> <br />
              <a href="#" className="text-alternate">
                Terms of Service
              </a>
              <span className="mx-1">and</span>
              <a href="#" className="text-alternate">
                Privacy Policies
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
