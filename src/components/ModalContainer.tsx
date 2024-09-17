"use client";
import { cn } from "@/lib/utils";
import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  className?: string;
  modal: ModalType;
  children: ReactNode;
}

export default function ModalContainer({ modal, className, children }: Props) {
  const isOpen = useActiveModal(modal);
  const { closeModal } = useModalActions();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        // initialFocus={cancelButtonRef}
        onClose={closeModal}
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
          <div className="fixed inset-0 bg-[#14141580] backdrop-blur-[2px]" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={cn(
                  "relative overflow-hidden sm:my-8 sm:w-full border border-[#767676] rounded-xl mx-5 md:max-w-[702px]",
                  className
                )}
              >
                {children}
                <ToastContainer containerId="modal" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
