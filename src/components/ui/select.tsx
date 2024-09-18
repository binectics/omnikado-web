import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";

interface SelectProps extends SelectPrimitive.SelectProps {
  className?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ className, children, placeholder, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          ref={forwardedRef}
          className={cn(
            "inline-flex items-center font-primary justify-center rounded-md px-3 h-10 border bg-[#FFFFFF0A] border-input text-sm text-[#DBE0EB] outline-none w-full",
            className
          )}
          aria-label="Region"
        >
          <SelectPrimitive.Value
            className="text-sm data-[placeholder]:text-sm"
            placeholder={placeholder}
          />
          <SelectPrimitive.Icon asChild className="ml-auto size-5">
            <ChevronDownIcon stroke="#818086" strokeWidth={2} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            side="bottom"
            sideOffset={5}
            className="overflow-hidden bg-white rounded-md z-50 w-[var(--radix-select-trigger-width)] max-h-[var(--radix-select-content-available-height)]"
          >
            {/* max-h-[var(--radix-select-content-available-height)] */}
            <SelectPrimitive.ScrollUpButton className="flex items-center w-full justify-center h-[25px] bg-white cursor-default">
              <ChevronUpIcon className="size-5" />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center w-full justify-center h-[25px] bg-white cursor-default">
              <ChevronDownIcon className="size-5" />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";

export const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "relative flex items-center px-8 py-2 text-sm text-primary font-medium bg-black font-primary border-none",
        "radix-disabled:opacity-50",
        "focus:outline-none select-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = "SelectItem";
