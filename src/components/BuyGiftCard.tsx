import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const BuyGiftCard = () => {
  return (
    <div className="flex w-full mt-8 max-w-[540px] lg:mt-12 font-primary items-center">
      <Input
        type="name"
        placeholder="Search brands and eGift Cards"
        className="md:w-[360px] md:min-h-10 rounded-none text-sm sm:text-base"
      />
      <Button
        type="submit"
        className="md:min-h-10 rounded-none md:min-w-[180px] flex gap-x-2 items-center"
      >
        <span className="font-semibold">Buy a Gift Card</span>
        <ArrowUpRightIcon className="size-5 block" />
      </Button>
    </div>
  );
};

export default BuyGiftCard;
