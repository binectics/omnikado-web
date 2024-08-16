import { useModal, useModalActions } from "@/store/modal";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useEffect, useRef } from "react";

export default function ModalContainer({ children }: { children: ReactNode }) {
  const isOpen = useModal();
  const { toggleModal } = useModalActions();
  const cancelButtonRef = useRef(null);

  const closeModal = () => toggleModal(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
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
              <Dialog.Panel className="relative overflow-hidden bg-[#111111] sm:my-8 sm:w-full border border-[#767676] rounded-xl md:max-w-[702px]">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
