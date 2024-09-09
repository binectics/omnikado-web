import { assets } from "@/assets";
import { cn } from "@/lib/utils";
import { useModalActions, ModalType } from "@/store/modal";
import { Service } from "@/types/service";
import Image from "next/image";
import { useMemo } from "react";

interface CardProps extends Service {
  className?: string;
  disabled?: boolean;
}

const gradients = [
  "from-[#2E15C5] to-[#481D7E]",
  "from-[#B715C5] to-[#361D7E]",
  "from-[#15C527] to-[#1D7E5B]",
  "from-[#C5157F] to-[#7E1D40]",
  "from-[#1571C5] to-[#1D337E]",
];

export default function Card({ className, disabled, ...service }: CardProps) {
  const { openModal } = useModalActions();

  const open = () => openModal(ModalType.GiftCard, service);

  const gradient = useMemo(() => gradients[Math.floor(Math.random() * 5)], []);

  return (
    <button
      className={cn(
        "max-w-[380px] w-full h-[273px] rounded-2xl relative overflow-hidden bg-gradient-to-r p-7",
        gradient,
        className
      )}
      disabled={disabled}
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
