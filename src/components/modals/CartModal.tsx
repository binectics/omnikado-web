"use client";
import { assets } from "@/assets";
import { cn } from "@/lib/utils";
import { ModalType, useModalActions } from "@/store/modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CartForm from "../forms/CartForm";
import ModalContainer from "../ModalContainer";
import Card from "../card";

const cards = [
  { logo: assets.WalmartGiftCard, alt: "Walmart" },
  { logo: assets.NikeGiftCard, alt: "Nike" },
  { logo: assets.VanillaGiftCard, alt: "Vanilla" },
  { logo: assets.SephoraGiftCard, alt: "Sephora" },
  { logo: assets.WalmartGiftCard, alt: "Walmart" },
];

const data = [
  { label: "Total", value: "$150" },
  { label: "Fee", value: "$150" },
  { label: "Discount", value: "$150" },
  { label: "Payable", value: "$150" },
];

export default function CartModal() {
  const { closeModal } = useModalActions();

  return (
    <ModalContainer
      className="lg:max-w-[800px] xl:max-w-[1042px]"
      modal={ModalType.Cart}
    >
      <div className="bg-[#111111] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 font-primary text-primary text-left mb-6">
        <div className="w-full flex flex-end mb-6 sm:mb-10">
          <XMarkIcon
            onClick={() => closeModal()}
            className="size-7 ml-auto cursor-pointer"
            strokeWidth={2}
            stroke="#fff"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-10 justify-between">
          <div className="w-full sm:max-w-[320px] lg:max-w-[480px] sm:shrink-0">
            <h2 className="font-header text-lg font-medium mb-6">
              You have 3 items in your cart
            </h2>
            <div className="flex flex-wrap gap-4 max-h-[272px] sm:max-h-[338px] overflow-y-auto custom-scroll">
              {cards.map((card) => (
                <Card
                  disabled
                  className="cursor-default pointer-events-none"
                  key={card.alt}
                  {...card}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:max-w-[384px]">
            <h1 className="font-header text-lg font-medium mb-5">
              Order Summary
            </h1>
            {data.map(({ label, value }) => (
              <div key={label} className="flex font-primary mb-1">
                <span
                  className={cn(
                    "font-medium text-sm",
                    label == "Payable" && "font-semibold text-base"
                  )}
                >
                  {label}
                </span>
                <span className="inline-block ml-auto">{value}</span>
              </div>
            ))}
            <CartForm />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
