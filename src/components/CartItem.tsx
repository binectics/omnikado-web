import { useRemoveCartItem } from "@/hooks/useRemoveCartItem";
import { cn, randomGradient } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useMemo } from "react";
import { Skeleton } from "./ui/skeleton";

interface Props {
  cartId: string;
  id: string;
  logoUrl?: string;
  amount: number;
}

export default function CartItem({ id, cartId, logoUrl, amount }: Props) {
  const gradient = useMemo(() => randomGradient(), []);
  const { mutate: removeItem, isPending } = useRemoveCartItem();

  if (!logoUrl)
    return <Skeleton className="bg-[#1e1e1e] w-full rounded-2xl h-[200px]" />;

  return (
    <div
      className={cn(
        "w-full rounded-2xl relative bg-gradient-to-r p-8 h-[200px]",
        gradient
      )}
    >
      <button
        onClick={() => removeItem({ cartId, itemId: id })}
        disabled={isPending}
      >
        <XMarkIcon
          className="size-6 cursor-pointer absolute top-3 right-3"
          strokeWidth={2}
          stroke="#fff"
        />
      </button>
      <div className="relative h-full overflow-hidden">
        <p className="font-header text-left text-primary font-bold text-[28px] tracking-[-2%] z-50 text-wrap">
          {`$${Number(amount).toLocaleString()}`}
        </p>
        <Image
          src={logoUrl}
          alt={"Product image"}
          width={100}
          height={100}
          priority={true}
          className="object-contain rounded-xl z-3 absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
}
