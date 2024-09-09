import useDebounce from "@/hooks/useDebounce";
import getQueryClient from "@/lib/getQueryClient";
import { Service } from "@/types/service";
import { useMemo } from "react";
import { create } from "zustand";

interface ServiceStoreProps {
  searchQuery: string;
  filter: string;
  actions: {
    setFilter: (filter: string) => void;
    searchServices: (query: string) => void;
  };
}

const useServiceStore = create<ServiceStoreProps>((set) => ({
  searchQuery: "",
  filter: "",
  actions: {
    setFilter: (filter) => set({ filter: filter === "All" ? "" : filter }),
    searchServices: (query: string) => set({ searchQuery: query }),
  },
}));

type SearchQueryResult = {
  category?: string;
  name?: string;
} | null;

export const useSearchQuery = () => {
  const searchQuery = useServiceStore((s) => s.searchQuery);
  const filter = useServiceStore((s) => s.filter);
  const debouncedSearchQuery = useDebounce(searchQuery);

  return useMemo(() => {
    if (!debouncedSearchQuery && !filter) {
      return null;
    }

    const result: SearchQueryResult = {};

    if (filter) {
      result.category = filter;
    }

    if (debouncedSearchQuery) {
      result.name = debouncedSearchQuery;
    }

    return Object.keys(result).length > 0 ? result : null;
  }, [debouncedSearchQuery, filter]);
};

export const useFilterActions = () => useServiceStore((s) => s.actions);
