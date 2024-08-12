import { assets } from "@/assets";
import Image from "next/image";
import CardList from "@/components/CardList";
import BuyGiftCard from "@/components/BuyGiftCard";
import Carousel from "@/components/Carousel";
import SearchFilter from "@/components/SearchFilter";

export default async function Home() {
  return (
    <section>
      <div className="relative">
        <div className="flex flex-col-reverse md:flex-row  w-full">
          <div className="pb-10 md:w-3/6 md:pt-24 lg:py-32 xl:py-52">
            <h1 className="font-header text-6xl font-bold text-primary sm:text-6xl tracking-wide">
              Share the Love: Discover Perfect Gift Cards for Every Occasion
            </h1>
            <p className="text-primary font-primary text-sm mt-4 sm:text-lg lg:text-xl lg:mt-6">
              Find the Perfect Present for Anyone, Anytime!
            </p>
            <BuyGiftCard />
          </div>
          <div className="md:w-3/6 h-64 md:h-auto m-auto flex items-center overflow-hidden hidden md:inline">
            <Image
              src={assets.OmnikadoMan}
              alt="Omnikado"
              width={100}
              height={100}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
      <Carousel />
      <div className="flex justify-center my-16">
        <h3 className="text-4xl font-bold text-primary tracking-wide text-center leading-loose">
          Surprise your loved ones with <br /> amazing gift cards
        </h3>
      </div>
      <SearchFilter />
      <CardList />
    </section>
  );
}
