import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/assets";

export const HeroPage = () => {
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

  const cards = [
    { logo: assets.WalmartGiftCard, alt: "Walmart" },
    { logo: assets.NikeGiftCard, alt: "Nike" },
    { logo: assets.VanillaGiftCard, alt: "Vanilla" },
    { logo: assets.SephoraGiftCard, alt: "Sephora" },
    { logo: assets.GooglePlayGiftCard, alt: "Google Play" },
    { logo: assets.AmazonGiftCard, alt: "Amazon" },
    { logo: assets.NordstromGiftCard, alt: "Nordstrom" },
    { logo: assets.SteamGiftCard, alt: "Steam" },
    { logo: assets.EbayGiftCard, alt: "Ebay" },
  ];
  return (
    <div>
      <div className="mx-auto container relative z-0 px-4 xl:px-0 ">
        <div className="flex flex-col-reverse md:flex-row container">
          <div className="md:w4/4 md:pt-24 pb-10 lg:py-32 xl:py-52 ">
            <h1 className="font-header text-6xl font-bold text-primary sm:text-6xl tracking-wide">
              Share the Love: Discover Perfect Gift Cards for Every Occasion
            </h1>
            <p className="text-primary text-sm mt-4">
              Find the Perfect Present for Anyone, Anytime!
            </p>
            <div className="flex w-full mt-10">
              <Input
                type="name"
                placeholder="Search brands and eGift Cards"
                className="md:w-[360px]  md:min-h-10 rounded-none text-primary placeholder:text-primary"
              />
              <Button
                type="submit"
                className="text-primary bg-alternate md:min-h-10 rounded-none md:min-w-[180px]"
              >
                Buy a Gift Card
              </Button>
            </div>
          </div>
          {/* <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
            <Image
              src={assets.OmnikadoMan}
              alt="Omnikado"
              width={100}
              height={100}
              className="md:absolute md:w-1/ md:-ml-60"
            />
          </div> */}
        </div>
      </div>
      <div className="py-10 sm:py-10">
        <div>
          <div className=" container mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
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
      </div>

      <div className="container flex flex-row justify-between">
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
          <button className=" bg-transparent py-1.5 px-5 text-gray-600 border-white rounded-lg border-[0.6px]">
            Apply filter
          </button>
        </div>
      </div>

      <div className="py-10 sm:py-10 grid grid-cols-1 gap-10 container lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.alt}>
            <Image
              src={card.logo}
              alt={card.alt}
              width={100}
              height={100}
              className="max-h-72 w-full object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
