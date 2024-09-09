import { create } from "zustand";

interface CartStoreProps {
  cartItems: any[];
  actions: {
    addToCart: (newItem: any) => void;
    removeFromCart: (itemId: any) => void;
  };
}

const useCartStore = create<CartStoreProps>((set) => ({
  cartItems: [],
  actions: {
    addToCart: (newItem) =>
      set((state) => ({ cartItems: [...state.cartItems, newItem] })),
    removeFromCart: (itemId) =>
      set((state) => ({
        cartItems: [...state.cartItems].filter((item) => item.id === itemId),
      })),
  },
}));

export const useCartItems = () => useCartStore((s) => s.cartItems);
export const useCartActions = () => useCartStore((s) => s.actions);
