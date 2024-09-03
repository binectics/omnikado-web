"use client";
import { useAllCategories } from "@/hooks/useAllCategories";
import { useFilterActions } from "@/store/service";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Select } from "./ui/select";

export default function SearchFilter() {
  const { setFilter, searchServices } = useFilterActions();
  const { data } = useAllCategories();

  const categories = ["All", ...data].map((value) => ({
    label: value,
    value,
  }));

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5">
      <div className="border border-input flex items-center gap-x-2 py-3 px-[14px] rounded-lg w-full max-w-full sm:max-w-[400px]">
        <MagnifyingGlassIcon className="size-5 fill-[#667085]" />
        <input
          type="text"
          onChange={(e) => searchServices(e.target.value)}
          name="search"
          id="search"
          autoComplete="search"
          className="bg-transparent text-primary placeholder:text-placeholder w-full outline-0 text-base font-header"
          placeholder="Search"
        />
      </div>
      <Select
        className="max-w-[280px]"
        placeholder="Select a Filter"
        options={categories}
        onValueChange={setFilter}
      />
    </div>
  );
}

// const FilterList = ({
//   filters,
//   currentFilter,
//   onSelectFilter,
// }: {
//   filters: string[];
//   currentFilter: string;
//   onSelectFilter: (filter: string) => void;
// }) => {
//   return filters ? (
//     <div className="flex gap-3 md:ml-auto flex-wrap">
//       {filters.map((filter) => (
//         <button
//           key={filter}
//           onClick={() => onSelectFilter(filter)}
//           className={cn(
//             "px-4 py-3 rounded-lg font-primary text-xs sm:text-sm capitalize border-input border",
//             currentFilter === filter
//               ? "text-black bg-input font-extrabold"
//               : "text-primary"
//           )}
//         >
//           {filter}
//         </button>
//       ))}
//     </div>
//   ) : null;
// };
