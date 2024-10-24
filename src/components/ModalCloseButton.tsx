"use client";

import { cn } from "@/lib/utils";
import { useModalActions } from "@/store/modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  redirectUrl?: string;
}

const ModalCloseButton = ({ className, redirectUrl }: Props) => {
  const { closeModal } = useModalActions();
  const router = useRouter();

  const handleClose = () => {
    closeModal();
    if (redirectUrl) router.push(redirectUrl);
  };

  return (
    <DialogClose asChild>
      <XMarkIcon
        onClick={handleClose}
        className={cn("size-7 md:size-6 ml-auto cursor-pointer", className)}
        strokeWidth={2}
        stroke="#fff"
      />
    </DialogClose>
  );
};

export default ModalCloseButton;
