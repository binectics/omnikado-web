"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/assets";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  QueueListIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

export const HeroPage = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const [cards, setCards] = useState([
    { logo: assets.WalmartGiftCard, alt: "Walmart" },
    { logo: assets.NikeGiftCard, alt: "Nike" },
    { logo: assets.VanillaGiftCard, alt: "Vanilla" },
    { logo: assets.SephoraGiftCard, alt: "Sephora" },
    { logo: assets.GooglePlayGiftCard, alt: "Google Play" },
    { logo: assets.AmazonGiftCard, alt: "Amazon" },
    { logo: assets.NordstromGiftCard, alt: "Nordstrom" },
    { logo: assets.SteamGiftCard, alt: "Steam" },
    { logo: assets.EbayGiftCard, alt: "Ebay" },
  ]);

  const partners = [
    { logo: assets.NikeLogo, alt: "Nike" },
    // { logo: assets.VanillaLogo, alt: "Vanilla" },
    // { logo: assets.SephoraLogo, alt: "Sephora" },
    // { logo: assets.AmexLogo, alt: "Amex" },
    { logo: assets.GooglePlayLogo, alt: "Google Play" },
    { logo: assets.AmazonLogo, alt: "Amazon" },
    { logo: assets.NordstromLogo, alt: "Nordstrom" },
    { logo: assets.WalmartLogo, alt: "Walmart" },
    { logo: assets.SteamLogo, alt: "Steam" },
  ];

  return (
    <div>
      <div className="mx-auto container relative  xl:px-0 ">
        <div className="flex flex-col-reverse md:flex-row  w-full">
          <div className="pb-10 md:w-3/6 md:pt-24 lg:py-32 xl:py-52">
            <h1 className="font-header text-6xl font-bold text-primary sm:text-6xl tracking-wide">
              Share the Love: Discover Perfect Gift Cards for Every Occasion
            </h1>
            <p className="text-primary text-sm mt-4">
              Find the Perfect Present for Anyone, Anytime!
            </p>
            <div className="flex w-full mt-10">
              <Input
                type="name"
                placeholder="Search brands and eGift Cards"
                className="md:w-[360px]  md:min-h-10 rounded-none text-primary placeholder:text-primary"
              />
              <Button
                type="submit"
                className="text-primary bg-alternate md:min-h-10 rounded-none md:min-w-[180px]"
              >
                Buy a Gift Card <ArrowUpRightIcon className="h-4 w-4 inline" />
              </Button>
            </div>
          </div>
          <div className="md:w-3/6 h-64 md:h-auto m-auto flex items-center overflow-hidden hidden md:inline">
            <Image
              src={assets.OmnikadoMan}
              alt="Omnikado"
              width={100}
              height={100}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
      <div className="py-10 sm:py-10">
        <div>
          <div className=" container mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {partners.map((partner) => (
              <Image
                key={partner.alt}
                src={partner.logo}
                alt={partner.alt}
                width={100}
                height={100}
                className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container flex justify-center my-16">
        <h3 className="text-4xl font-bold text-primary tracking-wide text-center leading-loose">
          Surprise your loved ones with <br /> amazing gift cards
        </h3>
      </div>

      <div className="container flex flex-row justify-between">
        <div className="sm:basis-3/4">
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="search"
            className="block flex-1 bg-transparent py-1.5 pl-5 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg w-full lg:w-3/12"
            style={{ border: ".6px solid white" }}
            placeholder="Search"
          />
        </div>
        <div className="3/4">
          <button className=" bg-transparent py-1.5 px-5 text-white border-white rounded-lg border-[0.6px]">
            <QueueListIcon className="h-5 w-5 inline" /> Apply filter
          </button>
        </div>
      </div>

      <div className="py-10 sm:py-10 grid grid-cols-1 gap-10 container lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.alt}>
            <Image
              src={card.logo}
              alt={card.alt}
              width={100}
              height={100}
              onClick={() => setOpen(true)}
              className="max-h-72 w-full object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div
        className="flex border-t-2 mx-14 py-6 mt-6"
        style={{ borderColor: "rgba(234, 236, 240, 0.1)" }}
      >
        <div className="flex-auto">
          <p className="text-primary font-bold cursor-pointer">
            <ArrowLeftIcon className="h-4 w-4 inline" /> Previous
          </p>
        </div>
        <div className="flex-auto">
          <ul className="list-none text-primary font-xs">
            <li className="inline border rounded-[100px] p-2 mr-4 h-40 w-40 cursor-pointer">
              1
            </li>
            <li className="inline p-2 mr-4 h-40 w-40 cursor-pointer">2</li>
            <li className="inline p-2 mr-4 h-40 w-40 cursor-pointer">3</li>
          </ul>
        </div>
        <div>
          <p className="text-primary font-bold cursor-pointer">
            Next <ArrowRightIcon className="h-4 w-4 inline" />
          </p>
        </div>
      </div>

      <div className="mt-72">
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
      </div>

      <footer className="border-t mx-14 py-6 mt-10 border-white">
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
      </footer>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#111111] shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-[#111111] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <Image
                      src={assets.WalmartLogo}
                      alt={"Walmart"}
                      width={100}
                      height={100}
                      className="max-h-12 w-auto object-contain m-3"
                    />
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-white"
                        >
                          Walmart Multi-region cards
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-xs text-white">
                            Like the creators who use their gear, adidas is
                            committed to their craft. They believe that sport
                            has the power to change lives. adidas creates
                            innovative products, apparel and footwear for
                            athletes and designs sport-centric streetwear for
                            everyone. Their goal is to promote creativity and
                            encourage anyone to harness the power of sport in
                            their life. Use this gift card at adidas retail
                            locations or online at adidas.com.Online Redemption:
                            Enter your full 19 digit card number & 4 digit PIN
                            in the gift card field of the payment screen. Click
                            Apply In-store Redemption: Bring your Gift Card
                            number and PIN to any adidas Sport Performance,
                            adidas Originals, or adidas Outlet store. Terms and
                            Conditions  adidas Gift Cards may be redeemed for
                            merchandise on adidas.com and in adidas Sport
                            Performance, adidas Originals, and adidas Outlet
                            stores in the United States. They are not currently
                            available for International use. adidas Gift Cards
                            are not redeemable at miteam.com, yeezysupply.com,
                            TaylorMade, y-3, Reebok or Rockport. Gift Cards
                            cannot be used to purchase another Gift Card.
                            Promotional offers or discounts do not apply to the
                            purchase of Gift Cards. Gift cards are not
                            returnable, and cannot be redeemed for cash unless
                            required by law. A maximum of five (5) Gift Cards
                            may be redeemed on one order. If the amount of your
                            Gift Card(s) does NOT cover the total order amount,
                            the remainder of the purchase balance can be paid
                            with an accepted alternate form of payment. Your
                            Gift Card will not expire as long as there is value
                            remaining on the Gift Card. You can use it anytime.
                            Any remaining value that is left on your Gift Card
                            will be stored and available for your next purchase.
                            We ask that you safeguard your card and treat your
                            Gift Card as you would cash. Do not share your Gift
                            Card Code and PIN. We are not able to replace or
                            replenish Gift Cards that are lost, stolen or used
                            without authorization. 
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-3 px-4 py-3">
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-1/2 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-[#2c2c2c] min-h-10 px-3"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#111111] px-5 py-3 sm:flex sm:px-6">
                    <button
                      type="button"
                      className="w-1/2 text-primary bg-transparent md:min-h-10 md:min-w-[180px] rounded-lg text-[#EB5810] border border-[#EB5810] m-2"
                      onClick={() => setOpen(false)}
                    >
                      Add to cart
                    </button>
                    <button
                      type="button"
                      className="w-1/2 text-primary bg-alternate md:min-h-10 md:min-w-[180px] rounded-lg m-2"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Checkout
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
