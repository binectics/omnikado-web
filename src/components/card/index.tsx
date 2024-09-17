import { cn, randomGradient } from "@/lib/utils";
import { ModalType, useModalActions } from "@/store/modal";
import { Service } from "@/types/service";
import Image from "next/image";
import { useMemo } from "react";

export default function Card(service: Service) {
  const { openModal } = useModalActions();

  const open = () => {
    openModal(ModalType.GiftCard, service);
  };

  const gradient = useMemo(() => randomGradient(), []);

  return (
    <button
      className={cn(
        "w-full rounded-2xl relative overflow-hidden bg-gradient-to-r p-7 max-w-[380px] h-[273px]",
        gradient
      )}
      onClick={open}
    >
      <div className="relative h-full">
        <p className="font-header text-right text-primary font-bold text-[28px] tracking-[-2%] absolute top-0 right-0 z-50">
          $60
        </p>
        <Image
          src={service.logoUrl}
          alt={service.name}
          width={100}
          height={100}
          priority={true}
          className="object-contain rounded-xl z-3 absolute bottom-0 right-0"
        />
      </div>
    </button>
  );
}
