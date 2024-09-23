"use client";
import { assets } from "@/assets";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { useCreateCart } from "@/hooks/useCreateCart";
import { ModalType, useModalActions } from "@/store/modal";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export const MainNav = () => {
  const { OmnikadoLogo } = assets;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModalActions();

  const { mutate: createCart } = useCreateCart();

  const { data: cart } = useCart();

  function open() {
    setMobileMenuOpen(false);
    createCart(undefined, {
      onSuccess: () => openModal(ModalType.Cart),
    });
  }

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              width={100}
              height={20}
              src={OmnikadoLogo}
              alt="Omnikado Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary font-primary"
          >
            Gift Cards
          </a>
          <button
            onClick={open}
            className="text-sm font-semibold leading-6 text-primary font-primary relative flex items-center"
          >
            <ShoppingCartIcon className="h-6 w-6 inline" />
            Cart
            {cart && cart.cartItems.length > 0 && (
              <Badge
                variant="destructive"
                className="rounded-full size-5 text-[10px] text-center justify-center p-0 ml-1"
              >
                {cart.cartItems.length}
              </Badge>
            )}
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={OmnikadoLogo}
                alt="Logo"
                width={100}
                height={20}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className=" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Gift Cards
                </a>
                <button
                  onClick={open}
                  className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center"
                >
                  <ShoppingCartIcon className="h-6 w-6 inline" />
                  Cart
                  {cart && cart.cartItems.length > 0 && (
                    <Badge
                      variant="destructive"
                      className="rounded-full size-5 text-[10px] text-center justify-center p-0 ml-1"
                    >
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
