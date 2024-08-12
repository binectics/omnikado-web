"use client";
import { assets } from "@/assets";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
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
                          committed to their craft. They believe that sport has
                          the power to change lives. adidas creates innovative
                          products, apparel and footwear for athletes and
                          designs sport-centric streetwear for everyone. Their
                          goal is to promote creativity and encourage anyone to
                          harness the power of sport in their life. Use this
                          gift card at adidas retail locations or online at
                          adidas.com.Online Redemption: Enter your full 19 digit
                          card number & 4 digit PIN in the gift card field of
                          the payment screen. Click Apply In-store Redemption:
                          Bring your Gift Card number and PIN to any adidas
                          Sport Performance, adidas Originals, or adidas Outlet
                          store. Terms and Conditions  adidas Gift Cards may be
                          redeemed for merchandise on adidas.com and in adidas
                          Sport Performance, adidas Originals, and adidas Outlet
                          stores in the United States. They are not currently
                          available for International use. adidas Gift Cards are
                          not redeemable at miteam.com, yeezysupply.com,
                          TaylorMade, y-3, Reebok or Rockport. Gift Cards cannot
                          be used to purchase another Gift Card. Promotional
                          offers or discounts do not apply to the purchase of
                          Gift Cards. Gift cards are not returnable, and cannot
                          be redeemed for cash unless required by law. A maximum
                          of five (5) Gift Cards may be redeemed on one order.
                          If the amount of your Gift Card(s) does NOT cover the
                          total order amount, the remainder of the purchase
                          balance can be paid with an accepted alternate form of
                          payment. Your Gift Card will not expire as long as
                          there is value remaining on the Gift Card. You can use
                          it anytime. Any remaining value that is left on your
                          Gift Card will be stored and available for your next
                          purchase. We ask that you safeguard your card and
                          treat your Gift Card as you would cash. Do not share
                          your Gift Card Code and PIN. We are not able to
                          replace or replenish Gift Cards that are lost, stolen
                          or used without authorization. 
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
  );
}
