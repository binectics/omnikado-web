"use client";
import { useCart } from "@/hooks/useCart";
import { useGetProducts } from "@/hooks/useGetProducts";
import { ModalType } from "@/store/modal";
import CartItem from "../CartItem";
import ModalCloseButton from "../ModalCloseButton";
import ModalContainer from "../ModalContainer";
import CartForm from "../forms/CartForm";
import { DialogTitle } from "../ui/dialog";

export default function CartModal() {
  const { data: cart } = useCart();

  const { logos } = useGetProducts(
    cart?.cartItems.map((item) => item.productId)
  );

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
          <ModalCloseButton />
        </div>
        <div className="md:grid md:grid-cols-[1.5fr_1fr] gap-6 justify-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-header text-lg font-medium mb-6">
              {`You have ${cart?.cartItems.length ?? 0} items in your cart`}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 overflow-y-auto custom-scroll max-h-[300px] pr-3">
              {cart?.cartItems.map((cartItem, index) => (
                <CartItem
                  cartId={cart.id}
                  key={cartItem.id}
                  logoUrl={logos[index]}
                  id={cartItem.id}
                  amount={cartItem.convertedToAmount}
                  currencyCode={cartItem.convertedToCurrency}
                />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <DialogTitle className="font-header text-lg font-medium mb-5">
              Order Summary
            </DialogTitle>
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
            <CartForm totalAmount={totalamount} cartId={cart?.id!} />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
