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
    // { logo: assets.AmazonLogo, alt: "Amazon" },
    { logo: assets.NordstromLogo, alt: "Nordstrom" },
    { logo: assets.WalmartLogo, alt: "Walmart" },
    { logo: assets.SteamLogo, alt: "Steam" },
  ];
  return (
    <div className="py-10 sm:py-10">
      <div className="flex items-center w-full gap-x-8">
        {partners.map((partner) => (
          <Image
            key={partner.alt}
            src={partner.logo}
            alt={partner.alt}
            width={100}
            height={100}
            className="max-h-12 w-full object-contain shrink"
          />
        ))}
      </div>
    </div>
  );
}
