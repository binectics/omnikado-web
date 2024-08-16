"use client";
import { assets } from "@/assets";
import { useModalActions } from "@/store/modal";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import GiftCardForm from "../GiftCardForm";
import ModalContainer from "../ModalContainer";

export default function GiftCardModal() {
  const { toggleModal } = useModalActions();
  return (
    <ModalContainer>
      <div className="bg-[#111111] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 font-primary text-left">
        <header className="flex items-center mb-5">
          <div className="flex flex-col gap-x-5 gap-y-1 sm:flex-row sm:items-center">
            <Image
              src={assets.WalmartLogo}
              alt={"Walmart"}
              width={100}
              height={100}
              className="max-h-12 w-auto object-contain"
            />
            <span className="inline-block text-xs font-primary text-primary h-fit mt-auto">
              Available region: France, USA, Canada
            </span>
          </div>
          <XMarkIcon
            onClick={() => toggleModal(false)}
            className="sm:size-6 size-9 ml-auto"
            strokeWidth={2}
            stroke="#fff"
          />
        </header>
        <Dialog.Title as="h3" className="font-semibold text-lg text-white">
          Walmart Multi-region cards
        </Dialog.Title>
        <p className="text-sm text-white mt-2">
          Like the creators who use their gear, adidas is committed to their
          craft. They believe that sport has the power to change lives. adidas
          creates innovative products, apparel and footwear for athletes and
          designs sport-centric streetwear for everyone. Their goal is to
          promote creativity and encourage anyone to harness the power of sport
          in their life. Use this gift card at adidas retail locations or online
          at adidas.com.Online Redemption: Enter your full 19 digit card number
          & 4 digit PIN in the gift card field of the payment screen. Click
          Apply In-store Redemption: Bring your Gift Card number and PIN to any
          adidas Sport Performance, adidas Originals, or adidas Outlet store.
          ...See more
        </p>
        <GiftCardForm />
      </div>
    </ModalContainer>
  );
}
