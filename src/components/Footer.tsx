import Image from "next/image";
import { assets } from "@/assets";

export default async function Footer() {
  return (
    <footer className="mt-72">
      <div className="mb-6 mx-12 lg:justify-center flex">
        <Image
          className="h-8 w-auto block"
          src={assets.OmnikadoLogo}
          alt="Logo"
          width={100}
          height={20}
        />
      </div>
      <div className="mx-12  lg:justify-center flex">
        <ul className="list-none text-primary font-sm">
          <li className="sm:block lg:inline p-2 mr-4">
            <a
              target="__blank"
              href="/docs/refund.pdf"
              className="hover:underline me-4 md:me-6"
            >
              Refund Policy
            </a>
          </li>
          <li className="sm:block lg:inline p-2 mr-4">
            <a
              target="__blank"
              href="/docs/terms-of-sale.pdf"
              className="hover:underline me-4 md:me-6"
            >
              Terms of Sale
            </a>
          </li>
          <li className="sm:block lg:inline p-2 mr-4">
            <a
              href="matilto:support@omnikado.com"
              className="hover:underline me-4 md:me-6"
            >
              Help
            </a>
          </li>
          <li className="sm:block lg:inline p-2 mr-4">
            <a
              target="__blank"
              href="/docs/privacy.pdf"
              className="hover:underline me-4 md:me-6"
            >
              Privacy
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t mx-14 py-6 mt-10 border-white">
        <div className="w-full md:flex md:items-center md:justify-between">
          <span className="text-md text-primary sm:text-center ">
            © 2024{" "}
            <a href="https://omnikado.com/" className="hover:underline">
              OmniKado
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-primary sm:mt-0">
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
