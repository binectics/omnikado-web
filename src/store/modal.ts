import { Service } from "@/types/service";
import { create } from "zustand";

export enum ModalType {
  None,
  GiftCard,
  Cart,
  Success,
  Failed,
}

// Define the data types for each modal
interface ModalDataMap {
  [ModalType.None]: null;
  [ModalType.GiftCard]: Service;
  [ModalType.Cart]: {
    items: Array<{ id: string; quantity: number }>;
    total: number;
  };
  [ModalType.Success]: {
    message: string;
    redirectUrl?: string;
  };
  [ModalType.Failed]: {
    error: string;
    code?: number;
  };
}

interface ModalStoreProps {
  activeModal: ModalType;
  modalData: ModalDataMap[keyof ModalDataMap] | null;
  actions: {
    openModal: <T extends ModalType>(
      modal: T,
      payload?: ModalDataMap[T]
    ) => void;
    closeModal: () => void;
  };
}

const useModalStore = create<ModalStoreProps>((set) => ({
  activeModal: ModalType.None,
  modalData: null,
  actions: {
    openModal: (modal, payload) =>
      set({ activeModal: modal, modalData: payload ?? null }),
    closeModal: () => {
      set({ activeModal: ModalType.None, modalData: null });
    },
  },
}));

export const useActiveModal = (modal: ModalType) => {
  const activeModal = useModalStore((s) => s.activeModal);
  return modal === activeModal;
};

export const useModalActions = () => useModalStore((s) => s.actions);

// Generic modal data hook with type inference
export function useModalData<T extends ModalType>() {
  const modalData = useModalStore((s) => s.modalData);
  return modalData as ModalDataMap[T];
}
