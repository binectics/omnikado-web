"use client";

import { QueueListIcon } from "@heroicons/react/24/outline";

export default function SearchFilter() {
  return (
    <div className="flex flex-row justify-between">
      <div className="sm:basis-3/4">
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="search"
          className="block flex-1 bg-transparent py-1.5 pl-5 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg w-full lg:w-3/12"
          style={{ border: ".6px solid white" }}
          placeholder="Search"
        />
      </div>
      <div className="3/4">
        <button className=" bg-transparent py-1.5 px-5 text-white border-white rounded-lg border-[0.6px]">
          <QueueListIcon className="h-5 w-5 inline" /> Apply filter
        </button>
      </div>
    </div>
  );
}
