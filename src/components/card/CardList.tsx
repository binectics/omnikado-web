"use client";
import { useAllServices } from "@/hooks/useAllServices";
import { useMemo, useState } from "react";
import Card from ".";
import Pagination from "../Pagination";

const itemsPerPage = 12;

export default function CardList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: services } = useAllServices();

  const currentServices = useMemo(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return services.slice(begin, end);
  }, [currentPage, services]);

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page <= totalPages ? page : currentPage);
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center justify-between mb-14">
        {currentServices.map((product) => (
          <Card key={product._id} {...product} />
        ))}
      </div>
      {currentServices && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
