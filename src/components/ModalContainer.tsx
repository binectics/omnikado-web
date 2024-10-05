"use client";
import { toastConfig } from "@/lib/toast";
import { cn } from "@/lib/utils";
import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode, useCallback } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  className?: string;
  modal: ModalType;
  children: ReactNode;
}

export default function ModalContainer({ modal, className, children }: Props) {
  const isOpen = useActiveModal(modal);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={(e) => {
          console.log(e);
        }}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#14141580] backdrop-blur-[2px]" />
        </TransitionChild>

        <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={cn(
                  "relative overflow-hidden sm:my-8 sm:w-full border border-[#767676] rounded-xl mx-5 md:max-w-[702px]",
                  className
                )}
              >
                {children}
                <ToastContainer {...toastConfig} containerId="modal" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
