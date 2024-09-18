"use client";

import { assets } from "@/assets";
import { ModalType, useModalActions } from "@/store/modal";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ModalContainer from "../ModalContainer";
import { Button } from "../ui/button";

export default function SuccessModal() {
  const { closeModal } = useModalActions();
  return (
    <ModalContainer
      className="rounded-[20px] max-w-[400px] md:max-w-[547px] md:h-[400px]"
      modal={ModalType.Success}
    >
      <div className="bg-[#111111] px-6 py-10 font-primary text-center h-full relative flex flex-col items-center justify-center">
        <XMarkIcon
          onClick={() => closeModal()}
          className="size-7 md:size-6 absolute top-5 right-5 cursor-pointer"
          strokeWidth={2}
          stroke="#fff"
        />
        <div className="size-[117px] relative">
          <Image src={assets.Success} fill={true} alt="" />
        </div>
        <Dialog.Title
          as="h3"
          className="font-medium text-sm sm:text-base text-white mb-4 mt-6 sm:mt-10"
        >
          Your phone number is verified successfully
        </Dialog.Title>
        <Button
          type="submit"
          className="rounded-lg py-[10px] w-full max-w-[272px]"
        >
          <span className="font-semibold text-base text-primary">
            Complete your Purchase
          </span>
        </Button>
      </div>
    </ModalContainer>
  );
}
