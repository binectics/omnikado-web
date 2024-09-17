"use client";
import { useCart } from "@/hooks/useCart";
import { ModalType, useModalActions } from "@/store/modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import ModalContainer from "../ModalContainer";
import Card from "../card";
import CartForm from "../forms/CartForm";
import CartItem from "../CartItem";
import { useRemoveFromCart } from "@/hooks/useRemoveFromCart";

export default function CartModal() {
  const { closeModal } = useModalActions();
  const [sessionId] = useLocalStorage<string | null>("sessionId", null);
  const { data: cart } = useCart(sessionId);

  const { mutate: removeItem } = useRemoveFromCart();

  const totalamount = cart?.cartItems
    ? cart.cartItems
        .map((item) => Number(item.convertedToAmount))
        .reduce((total, amount) => total + amount, 0)
    : 0.0;

  return (
    <ModalContainer
      className="lg:max-w-[900px] xl:max-w-[1042px]"
      modal={ModalType.Cart}
    >
      <div className="bg-[#111111] px-4 pb-4 pt-5 sm:p-6 sm:pb-7 font-primary text-primary text-left">
        <div className="w-full flex flex-end mb-6 sm:mb-10">
          <XMarkIcon
            onClick={() => closeModal()}
            className="size-7 md:size-6 ml-auto cursor-pointer"
            strokeWidth={2}
            stroke="#fff"
          />
        </div>
        <div className="md:grid md:grid-cols-[1.5fr_1fr] gap-6 justify-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-header text-lg font-medium mb-6">
              {`You have ${cart?.cartItems.length ?? 0} items in your cart`}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 overflow-y-auto custom-scroll max-h-[300px] pr-3">
              {cart?.cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  logoUrl="https://bamboo-assets.s3.amazonaws.com/app-images/brand-images/2256/logo"
                  id={cartItem.id}
                  amount={cartItem.sourceAmount}
                  onRemoveItem={(id) =>
                    removeItem({ cartId: cart.id, itemId: id })
                  }
                />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-header text-lg font-medium mb-5">
              Order Summary
            </h1>
            <div className="flex font-primary mb-1">
              <span className="font-medium text-sm">Total:</span>
              <span className="inline-block ml-auto text-wrap">
                {`NGN ${totalamount.toLocaleString()}`}
              </span>
            </div>
            <div className="flex font-primary mb-1">
              <span className="font-medium text-sm">Fee:</span>
              <span className="inline-block ml-auto text-wrap">{0.0}</span>
            </div>
            <div className="flex font-primary mb-1">
              <span className="font-medium text-sm">Discount</span>
              <span className="inline-block ml-auto text-wrap">{0.0}</span>
            </div>
            <div className="flex font-primary mb-1">
              <span className="font-semibold text-sm">Payable:</span>
              <span className="inline-block ml-auto text-wrap">
                {`NGN ${totalamount.toLocaleString()}`}
              </span>
            </div>
            <CartForm totalAmount={totalamount} />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
