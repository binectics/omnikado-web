import Image from "next/image";
import { assets } from "@/assets";

export default async function Footer() {
  return (
    <footer className="mt-72 flex flex-col items-center mx-8 font-header text-footer">
      <Image
        className="h-8 w-auto block mb-5 lg:mb-8"
        src={assets.OmnikadoLogo}
        alt="Logo"
        width={100}
        height={20}
      />
      <ul className="list-none font-sm flex justify-between gap-x-8 flex-wrap">
        <li className="p-2 text-nowrap">
          <a
            target="__blank"
            href="/docs/refund.pdf"
            className="text-xs sm:text-sm sm:hover:underline "
          >
            Refund Policy
          </a>
        </li>
        <li className="p-2 text-nowrap">
          <a
            target="__blank"
            href="/"
            className="text-xs sm:text-sm sm:hover:underline "
          >
            Disclaimer
          </a>
        </li>
        <li className="p-2 text-nowrap">
          <a
            target="__blank"
            href="/docs/terms-of-sale.pdf"
            className="text-xs sm:text-sm sm:hover:underline "
          >
            Terms of Sale
          </a>
        </li>
        <li className="p-2 text-nowrap">
          <a
            href="matilto:support@omnikado.com"
            className="text-xs sm:text-sm sm:hover:underline "
          >
            Help
          </a>
        </li>
        <li className="p-2 text-nowrap">
          <a
            target="__blank"
            href="/docs/privacy.pdf"
            className="text-sm sm:hover:underline "
          >
            Privacy
          </a>
        </li>
      </ul>
      <div className="border-t mx-14 py-6 mt-10 border-white w-full">
        <div className="w-full md:flex md:items-center md:justify-between">
          <span className="text-xs sm:text-sm sm:text-center ">
            © 2024{" "}
            <a href="https://omnikado.com/" className="hover:underline">
              OmniKado
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-xs sm:text-sm sm:mt-0">
            <li>
              <a
                target="__blank"
                href="/docs/terms-of-service.pdf"
                className="hover:underline me-4 md:me-6"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                target="__blank"
                href="/docs/privacy.pdf"
                className="hover:underline me-4 md:me-6"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                target="__blank"
                href="/docs/terms-of-service.pdf"
                className="hover:underline me-4 md:me-6"
              >
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
