import { assets } from "@/assets";
import BuyGiftCard from "@/components/BuyGiftCard";
import Carousel from "@/components/Carousel";
import QueryErrorBoundary from "@/components/QueryErrorBoundary";
import SearchFilter from "@/components/SearchFilter";
import CardList from "@/components/card/CardList";
import { Skeleton } from "@/components/ui/skeleton";
import getQueryClient from "@/lib/getQueryClient";
import { prefetchAllCategories, prefetchAllServices } from "@/queries";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();

  await prefetchAllServices(queryClient);
  await prefetchAllCategories(queryClient);

  return (
    <section>
      <div className="lg:grid grid-cols-[1.2fr_1fr] items-center justify-center">
        <div className="md:pt-24 lg:py-32 xl:py-52 pb-10 pt-4 relative">
          <h1 className="font-header text-[50px] leading-[1.1] font-bold text-primary sm:text-6xl tracking-wide">
            Share the Love: Discover Perfect Gift Cards for Every Occasion
          </h1>
          <p className="text-primary font-primary mt-4 text-lg lg:text-xl lg:mt-6">
            Find the Perfect Present for Anyone, Anytime!
          </p>
          <BuyGiftCard />
        </div>
        <div className="hidden lg:block shrink-0 relative h-full w-full left-10 xl:left-20">
          <Image
            src={assets.OmnikadoMan}
            alt="Omnikado"
            fill={true}
            priority
            className="object-contain"
          />
        </div>
      </div>
      <Carousel />
      <div className="flex justify-center my-16">
        <h3 className="text-[38px] font-bold text-primary font-primary tracking-wide text-center leading-[60px] lg:leading-[72px]">
          Surprise your loved ones with <br /> amazing gift cards
        </h3>
      </div>
      <SearchFilter />
      <QueryErrorBoundary>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 justify-items-center justify-between mt-16">
              <Skeleton className="bg-skeleton max-h-72 h-72 w-full rounded-xl" />
              <Skeleton className="bg-skeleton max-h-72 h-72 w-full rounded-xl" />
              <Skeleton className="bg-skeleton max-h-72 h-72 w-full rounded-xl" />
            </div>
          }
        >
          <CardList />
        </Suspense>
      </QueryErrorBoundary>
    </section>
  );
}
