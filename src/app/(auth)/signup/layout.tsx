import { assets } from "@/assets";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-12 h-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 md:gap-16 md:flex-row items-center md:items-start justify-center w-full">
        <header className="md:max-w-sm w-full text-center md:text-left">
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
          <div className="mt-6 md:mt-8 font-primary text-primary">
            <h1 className="font-semibold text-2xl md:text-3xl mb-2 md:mb-3">
              Create your account
            </h1>
            <p className="text-base">
              Connecting skilled technicians with{" "}
              <br className="hidden md:block" /> those in need of their
              services.
            </p>
          </div>
          <ul className="mt-8 space-y-8 md:block hidden">
            <li className="flex items-center gap-x-3 font-primary text-primary text-base">
              <CheckIcon className="size-7 object-cover" stroke="#14CD5E" />
              <span>Instant Booking and Scheduling</span>
            </li>
            <li className="flex items-center gap-x-3 font-primary text-primary text-base">
              <CheckIcon className="size-7 object-cover" stroke="#14CD5E" />
              <span>Skill Matching and Recommendations</span>
            </li>
            <li className="flex items-center gap-x-3 font-primary text-primary text-base">
              <CheckIcon className="size-7 object-cover" stroke="#14CD5E" />
              <span>Secure Payment and Invoicing</span>
            </li>
          </ul>
        </header>
        <div className="max-w-[400px] w-full">{children}</div>
      </div>
    </section>
  );
}
