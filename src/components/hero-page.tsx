import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/assets";

export const HeroPage = () => {
  return (
    <div>
      <div className="mx-auto container relative z-0 px-4 xl:px-0 md:ml-10">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-3/4 md:pt-24 pb-10 lg:py-32 xl:py-52 ">
            <h1 className="font-header text-6xl font-bold text-primary sm:text-6xl leading-10 tracking-wide">
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
          <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
            <Image 
              src={assets.OmnikadoMan}
              alt="Omnikado"
              width={100}
              height={100}
              className="md:absolute md:w-1/2 md:-ml-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
