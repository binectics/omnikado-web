"use client";
import { assets } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { forwardRef, useState } from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className="w-full relative">
        <div
          className={cn(
            "flex h-10 items-center gap-x-2 w-full rounded-md border border-input bg-[#FFFFFF0A] px-3 text-sm ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          <input
            type={show ? "text" : "password"}
            className="outline-none bg-transparent h-full w-full py-2 rounded-md no-paste-color text-primary placeholder:text-muted-foreground"
            ref={ref}
            {...props}
          />
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="size-6 relative"
          >
            {show ? (
              <Image src={assets.ShowPassword} fill={true} alt="" />
            ) : (
              <Image src={assets.HidePassword} fill={true} alt="" />
            )}
          </button>
        </div>
        {error ? (
          <p className="text-red-500 text-xs mt-[6px]">{error}</p>
        ) : null}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
