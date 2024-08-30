"use client";
import { useAllServices } from "@/hooks/useAllServices";
import { useMemo, useState } from "react";
import Pagination from "../Pagination";
import Card from "./Card";
import { useFilters, useSearchQuery } from "@/store/service";
import { Service } from "@/types/service";

const itemsPerPage = 12;

function FilterByCategories(services: Service[], filters: string[]) {
  return filters.length >= 1
    ? services.filter(({ categories }) =>
        filters.every((filter) =>
          categories.map(({ name }) => name).includes(filter)
        )
      )
    : services;
}

function FilterByQuery(services: Service[], query: string) {
  return query
    ? services.filter((service) => query.includes(service.name.toLowerCase()))
    : services;
}

export default function CardList() {
  const { data: services } = useAllServices();
  const [currentPage, setCurrentPage] = useState(1);

  const filters = useFilters();
  const searchQuery = useSearchQuery();

  const filteredServices = useMemo(
    () => FilterByQuery(FilterByCategories(services, filters), searchQuery),
    [filters, services, searchQuery]
  );

  const currentData = useMemo(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return filteredServices.slice(begin, end);
  }, [currentPage, filteredServices]);

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page <= totalPages ? page : currentPage);
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center justify-between mb-14">
        {currentData.map((product) => (
          <Card key={product._id} logo={product.logoUrl} alt={product.name} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
