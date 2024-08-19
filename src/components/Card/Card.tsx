import { cn } from "@/lib/utils";
import { useModalActions, ModalType } from "@/store/modal";
import Image from "next/image";

interface Props {
  className?: string;
  card: { logo: string; alt: string };
  disabled?: boolean;
}

const Card = ({ card, className, disabled }: Props) => {
  const { openModal } = useModalActions();

  const open = () => openModal(ModalType.GiftCard);

  return (
    <button disabled={disabled} onClick={open} key={card.alt}>
      <Image
        src={card.logo}
        alt={card.alt}
        width={100}
        height={100}
        className={cn(
          "max-h-72 w-full object-contain cursor-pointer",
          className
        )}
      />
    </button>
  );
};

export default Card;
