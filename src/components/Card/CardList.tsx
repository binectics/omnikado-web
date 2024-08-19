"use client";
import { assets } from "@/assets";
import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Card from "./Card";
import { ModalType } from "@/store/modal";

const pages = [1, 2, 3, 4, 5, 6, 7];

export default function CardList() {
  const [currentPage, setCurrentPage] = useState(1);

  const [cards] = useState([
    { logo: assets.WalmartGiftCard, alt: "Walmart" },
    { logo: assets.NikeGiftCard, alt: "Nike" },
    { logo: assets.VanillaGiftCard, alt: "Vanilla" },
    { logo: assets.SephoraGiftCard, alt: "Sephora" },
    { logo: assets.GooglePlayGiftCard, alt: "Google Play" },
    { logo: assets.AmazonGiftCard, alt: "Amazon" },
    { logo: assets.NordstromGiftCard, alt: "Nordstrom" },
    { logo: assets.SteamGiftCard, alt: "Steam" },
    { logo: assets.EbayGiftCard, alt: "Ebay" },
  ]);
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center justify-between mb-14">
        {cards.map((card) => (
          <Card key={card.alt} card={card} />
        ))}
      </div>
      <div className="flex items-center justify-between border-t-2 py-5 border-[#EAECF01A] mx-auto">
        <button className="text-primary font-header text-sm font-bold cursor-pointer flex items-center gap-x-2">
          <ArrowLeftIcon className="size-5 inline-block" /> Previous
        </button>
        <div className="mx-auto hidden sm:block">
          <ul className="list-none flex items-center gap-x-2 text-primary font-xs">
            {pages.map((page) => (
              <li key={page}>
                {Math.round(pages.length / 2) === page ? (
                  <EllipsisHorizontalIcon className="size-6 mx-auto" />
                ) : (
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "inline rounded-full cursor-pointer border-white text-sm size-10 font-header",
                      currentPage === page && "border"
                    )}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="text-primary font-header text-sm font-bold cursor-pointer flex items-center gap-x-2 ml-auto sm:ml-0">
          Next <ArrowRightIcon className="size-5 inline-block" />
        </button>
      </div>
    </div>
  );
}
