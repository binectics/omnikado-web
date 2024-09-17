import { cn, randomGradient } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useMemo } from "react";

interface Props {
  id: string;
  logoUrl: string;
  amount: number;
  onRemoveItem: (id: string) => void;
}

export default function CartItem({ id, logoUrl, amount, onRemoveItem }: Props) {
  const gradient = useMemo(() => randomGradient(), []);
  return (
    <div
      className={cn(
        "w-full rounded-2xl relative bg-gradient-to-r p-8 h-[200px]",
        gradient
      )}
    >
      <XMarkIcon
        onClick={() => onRemoveItem(id)}
        className="size-6 cursor-pointer absolute top-3 right-3"
        strokeWidth={2}
        stroke="#fff"
      />
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
