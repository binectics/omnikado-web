import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  const prevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="flex items-center justify-between border-t-2 py-5 border-[#EAECF01A] mx-auto">
      <button
        onClick={prevPage}
        className="text-primary font-header text-sm font-bold cursor-pointer flex items-center gap-x-2"
      >
        <ArrowLeftIcon className="size-5 inline-block" /> Previous
      </button>
      <div className="mx-auto hidden sm:block">
        <ul className="list-none flex items-center gap-x-2 font-xs text-primary">
          {pages.slice(0, 3).map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={cn(
                  "inline rounded-lg hover:bg-white hover:text-[#667085] transition-colors duration-200 text-primary cursor-pointer text-sm size-10 font-header",
                  {
                    "border border-white rounded-full hover:bg-transparent":
                      currentPage === page,
                  }
                )}
              >
                {page}
              </button>
            </li>
          ))}
          <EllipsisHorizontalIcon className="size-6 mx-auto" />
          {pages.slice(-3).map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={cn(
                  "inline rounded-lg hover:bg-white hover:text-[#667085] transition-colors duration-200 text-primary cursor-pointer text-sm size-10 font-header",
                  {
                    "border border-white rounded-full hover:bg-transparent":
                      currentPage === page,
                  }
                )}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={nextPage}
        className="text-primary font-header text-sm font-bold cursor-pointer flex items-center gap-x-2 ml-auto sm:ml-0"
      >
        Next <ArrowRightIcon className="size-5 inline-block" />
      </button>
    </div>
  );
}
