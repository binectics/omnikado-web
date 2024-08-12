"use client";

import { assets } from "@/assets";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function CardList() {
  const [cards, setCards] = useState([
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
    <div>
      <div className="py-10 sm:py-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.alt}>
            <Image
              src={card.logo}
              alt={card.alt}
              width={100}
              height={100}
              //   onClick={() => setOpen(true)}
              className="max-h-72 w-full object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div
        className="flex border-t-2 mx-14 py-6 mt-6"
        style={{ borderColor: "rgba(234, 236, 240, 0.1)" }}
      >
        <div className="flex-auto">
          <p className="text-primary font-bold cursor-pointer">
            <ArrowLeftIcon className="h-4 w-4 inline" /> Previous
          </p>
        </div>
        <div className="flex-auto">
          <ul className="list-none text-primary font-xs">
            <li className="inline border rounded-[100px] p-2 mr-4 h-40 w-40 cursor-pointer">
              1
            </li>
            <li className="inline p-2 mr-4 h-40 w-40 cursor-pointer">2</li>
            <li className="inline p-2 mr-4 h-40 w-40 cursor-pointer">3</li>
          </ul>
        </div>
        <div>
          <p className="text-primary font-bold cursor-pointer">
            Next <ArrowRightIcon className="h-4 w-4 inline" />
          </p>
        </div>
      </div>
    </div>
  );
}
