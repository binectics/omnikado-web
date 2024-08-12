"use client";

import { assets } from "@/assets";
import Image from "next/image";

export default function Carousel() {
  const partners = [
    { logo: assets.NikeLogo, alt: "Nike" },
    // { logo: assets.VanillaLogo, alt: "Vanilla" },
    // { logo: assets.SephoraLogo, alt: "Sephora" },
    // { logo: assets.AmexLogo, alt: "Amex" },
    { logo: assets.GooglePlayLogo, alt: "Google Play" },
    { logo: assets.AmazonLogo, alt: "Amazon" },
    { logo: assets.NordstromLogo, alt: "Nordstrom" },
    { logo: assets.WalmartLogo, alt: "Walmart" },
    { logo: assets.SteamLogo, alt: "Steam" },
  ];
  return (
    <div className="py-10 sm:py-10">
      <div className="grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        {partners.map((partner) => (
          <Image
            key={partner.alt}
            src={partner.logo}
            alt={partner.alt}
            width={100}
            height={100}
            className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
          />
        ))}
      </div>
    </div>
  );
}
