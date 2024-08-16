"use client";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const filters = ["all", "payment-cards", "gift-cards"];

export default function SearchFilter() {
  const handleFilter = (filter: string) => {
    console.log(filter);
  };

  return (
    <div className="flex md:justify-between flex-col md:flex-row gap-y-5 justify-center">
      <div className="border border-input flex items-center gap-x-2 py-3 px-[14px] rounded-lg w-full md:max-w-[320px]">
        <MagnifyingGlassIcon className="size-5 fill-[#667085]" />
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="search"
          className="bg-transparent text-primary placeholder:text-placeholder w-full outline-0 text-base font-header"
          placeholder="Search"
        />
      </div>
      <FilterList onSelectFilter={handleFilter} filters={filters} />
    </div>
  );
}

const FilterList = ({
  filters,
  onSelectFilter,
}: {
  filters: string[];
  onSelectFilter: (filter: string) => void;
}) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  return filters ? (
    <div className="flex gap-3 md:ml-auto flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            setCurrentFilter(filter);
            onSelectFilter(filter);
          }}
          className={cn(
            "px-4 py-3 rounded-lg font-primary text-xs sm:text-sm capitalize border-input border",
            currentFilter === filter
              ? "text-black bg-input font-extrabold"
              : "text-primary"
          )}
        >
          {filter.split("-").join(" ")}
        </button>
      ))}
    </div>
  ) : null;
};
