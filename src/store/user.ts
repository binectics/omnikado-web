import { User } from "@/types/auth";
import { create } from "zustand";

interface UserStoreProps {
  user: User | null;
  actions: {
    setUser: (user: User) => void;
  };
}

const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  actions: {
    setUser: (user) => {
      console.log(user);
      return set({ user: user });
    },
  },
}));

export const useUser = () => useUserStore((s) => s.user);
export const useUserActions = () => useUserStore((s) => s.actions);
