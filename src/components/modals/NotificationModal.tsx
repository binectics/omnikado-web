"use client";

import { assets } from "@/assets";
import { ModalType, useModalData } from "@/store/modal";
import Image from "next/image";
import ModalCloseButton from "../ModalCloseButton";
import ModalContainer from "../ModalContainer";
import { Button } from "../ui/button";
import { DialogTitle } from "../ui/dialog";

export default function NotificationModal() {
  const modalData = useModalData<ModalType.Success>();

  if (!modalData) return;

  return (
    <ModalContainer
      className="rounded-[20px] max-w-[400px] md:max-w-[547px] md:h-[400px]"
      modal={ModalType.Success}
    >
      <div className="bg-[#111111] px-6 py-10 font-primary text-center h-full relative flex flex-col items-center justify-center">
        <ModalCloseButton redirectUrl={modalData.redirectUrl} />
        <div className="size-[117px] relative">
          <Image src={assets.Success} fill={true} alt="" />
        </div>
        <DialogTitle className="font-medium text-sm sm:text-base text-success mb-4 mt-6 sm:mt-10">
          {modalData.message}
        </DialogTitle>
        <Button
          type="submit"
          className="rounded-lg py-[10px] w-full max-w-[272px]"
        >
          <span className="font-semibold text-base text-primary">Done</span>
        </Button>
      </div>
    </ModalContainer>
  );
}
