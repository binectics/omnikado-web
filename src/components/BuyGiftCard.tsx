import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const BuyGiftCard = () => {
  return (
    <div className="flex w-full mt-10 font-primary">
      <Input
        type="name"
        placeholder="Search brands and eGift Cards"
        className="md:w-[360px]  md:min-h-10 rounded-none text-primary placeholder:text-primary"
      />
      <Button
        type="submit"
        className="text-primary bg-alternate md:min-h-10 rounded-none md:min-w-[180px]"
      >
        Buy a Gift Card <ArrowUpRightIcon className="h-4 w-4 inline" />
      </Button>
    </div>
  );
};

export default BuyGiftCard;
