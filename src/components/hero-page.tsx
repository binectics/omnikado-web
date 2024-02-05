import Image from "next/image";
import { assets } from "@/assets";

export const HeroPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-auto">
          <h1>
            Share the Love: Discover Perfect Gift Cards for Every Occasion
          </h1>
        </div>
        <div className="flex-auto">
          <Image
            src={assets.OmnikadoMan}
            alt="Omnikado"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
