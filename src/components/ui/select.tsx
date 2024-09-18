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
            "inline-flex items-center font-primary justify-center rounded-md px-3 h-10 border bg-background border-input text-sm text-[#DBE0EB] outline-none w-full",
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
            className="overflow-hidden bg-background rounded-md z-50 w-[var(--radix-select-trigger-width)] max-h-[200px] border border-input p-2"
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
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm text-primary focus:text-black outline-none focus:bg-accent focus:text-accent-foreground",
        "radix-disabled:opacity-50",
        "focus:outline-none"
      )}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = "SelectItem";
