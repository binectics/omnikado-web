import { create } from "zustand";

interface ModalStoreProps {
  isOpen: boolean;
  actions: {
    toggleModal: (isOpen: boolean) => void;
  };
}

const useModalStore = create<ModalStoreProps>((set) => ({
  isOpen: false,
  actions: {
    toggleModal: (isOpen) => set({ isOpen }),
  },
}));

export const useModal = () => useModalStore((s) => s.isOpen);
export const useModalActions = () => useModalStore((s) => s.actions);
