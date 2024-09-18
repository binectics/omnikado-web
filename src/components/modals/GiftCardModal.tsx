"use client";
import { ModalType, useModalActions, useModalData } from "@/store/modal";
import { Dialog, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ModalContainer from "../ModalContainer";
import GiftCardForm from "../forms/GiftCardForm";
import { Service } from "@/types/service";

export default function GiftCardModal() {
  const { closeModal } = useModalActions();
  const service = useModalData();

  return (
    <ModalContainer modal={ModalType.GiftCard}>
      {service && (
        <div className="bg-[#111111] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 font-primary text-left">
          <header className="flex items-center mb-5">
            <div className="flex flex-col gap-x-5 gap-y-1 sm:flex-row sm:items-center">
              <Image
                src={service.logoUrl}
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
              onClick={() => closeModal()}
              className="size-7 md:size-6 ml-auto cursor-pointer"
              strokeWidth={2}
              stroke="#fff"
            />
          </header>
          <DialogTitle
            as="h3"
            className="font-semibold text-lg text-white capitalize"
          >
            {`${service.name} Cards`}
          </DialogTitle>
          {service.description && (
            <div className="mt-1">
              <span className="font-primary text-primary text-sm font-semibold border-b border-primary">
                Description
              </span>
              <p className="text-sm text-white mt-1">{service.description}</p>
            </div>
          )}
          {service.redemptionInstructions && (
            <div className="mt-1">
              <span className="font-primary text-primary text-sm font-semibold border-b border-primary">
                Redemption Instructions
              </span>
              <p className="text-sm text-white mt-1">
                {service.redemptionInstructions}
              </p>
            </div>
          )}
          {service.terms && (
            <div className="mt-1">
              <span className="font-primary text-primary text-sm font-semibold border-b border-primary">
                Terms & Conditions
              </span>
              <p className="text-sm text-white mt-1">{service.terms}</p>
            </div>
          )}
          <GiftCardForm
            countryCode={service.countryCode}
            products={service.products}
          />
        </div>
      )}
    </ModalContainer>
  );
}
