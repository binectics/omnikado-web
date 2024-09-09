import { Service } from "@/types/service";
import { create } from "zustand";

export enum ModalType {
  None,
  GiftCard,
  Cart,
  Success,
}
interface ModalStoreProps {
  activeModal: ModalType;
  modalData: Service | null;
  actions: {
    openModal: (modal: ModalType, payload?: any) => void;
    closeModal: () => void;
  };
}

const useModalStore = create<ModalStoreProps>((set) => ({
  activeModal: ModalType.None,
  modalData: null,
  actions: {
    openModal: (modal: ModalType, payload?: any) =>
      set({ activeModal: modal, modalData: payload ?? null }),
    closeModal: () => {
      set({ activeModal: ModalType.None });
    },
  },
}));

export const useActiveModal = (modal: ModalType) => {
  const activeModal = useModalStore((s) => s.activeModal);
  return modal === activeModal;
};

export const useModalActions = () => useModalStore((s) => s.actions);

export const useModalData = () => useModalStore((s) => s.modalData);
