"use client";

import { cn } from "@/lib/utils";
import { ModalType, useActiveModal } from "@/store/modal";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Props {
  className?: string;
  modal: ModalType;
  children: ReactNode;
}

export default function ModalContainer({ modal, className, children }: Props) {
  const isOpen = useActiveModal(modal);

  return (
    <Dialog open={isOpen} onOpenChange={(e) => console.log(e)}>
      <DialogContent
        className={cn(
          "border border-[#767676] rounded-xl mx-5 md:max-w-[702px] bg-background max-h-[90vh] overflow-y-auto",
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
