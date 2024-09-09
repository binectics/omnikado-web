import { create } from "zustand";

interface AuthStoreProps {
  authToken: string | null;
  actions: {
    setAuth: (token: string) => void;
  };
}

const useAuthStore = create<AuthStoreProps>((set) => ({
  authToken: "",
  actions: {
    setAuth: (token) => set({ authToken: token }),
  },
}));

export const useAuthStoreActions = () => useAuthStore((s) => s.actions);
