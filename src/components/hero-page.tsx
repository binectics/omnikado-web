import Image from "next/image";
import { assets } from "@/assets";

export const HeroPage = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="font-header text-6xl font-bold text-primary sm:text-6xl leading-10 tracking-wide">
              Share the Love: Discover Perfect Gift Cards for Every Occasion
            </h1>
            <p className="text-primary text-xs mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src={assets.OmnikadoMan}
              alt="Omnikado"
              width={1000}
              // layout='fill'
              objectFit='contain'
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
