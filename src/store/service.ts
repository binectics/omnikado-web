import getQueryClient from "@/lib/getQueryClient";
import { Service } from "@/types/service";
import { create } from "zustand";

interface ServiceStoreProps {
  searchQuery: string;
  filters: string[];
  actions: {
    addFilter: (filter: string) => void;
    removeFilter: (filter: string) => void;
    searchServices: (query: string) => void;
  };
}

const useServiceStore = create<ServiceStoreProps>((set) => ({
  searchQuery: "",
  filters: [],
  actions: {
    addFilter: (filter) =>
      set((state) => ({
        filters: state.filters.includes(filter)
          ? state.filters
          : [...state.filters, filter],
      })),
    removeFilter: (filter) =>
      set((state) => ({ filters: state.filters.filter((f) => f !== filter) })),
    searchServices: (query: string) => set({ searchQuery: query }),
  },
}));

export const useFilters = () => useServiceStore((s) => s.filters);
export const useSearchQuery = () => useServiceStore((s) => s.searchQuery);

export const useFilterActions = () => useServiceStore((s) => s.actions);
