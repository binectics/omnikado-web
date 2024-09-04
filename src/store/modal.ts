import { create } from "zustand";

export enum ModalType {
  None,
  GiftCard,
  Cart,
  Success,
}
interface ModalStoreProps {
  activeModal: ModalType;
  actions: {
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
  };
}

const useModalStore = create<ModalStoreProps>((set) => ({
  activeModal: ModalType.None,
  actions: {
    openModal: (modal: ModalType) => set({ activeModal: modal }),
    closeModal: () => set({ activeModal: ModalType.None }),
  },
}));

export const useActiveModal = (modal: ModalType) => {
  const activeModal = useModalStore((s) => s.activeModal);
  return modal === activeModal;
};

export const useModalActions = () => useModalStore((s) => s.actions);
