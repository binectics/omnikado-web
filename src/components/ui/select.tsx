import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { forwardRef } from "react";
import {
  FieldValues,
  UseControllerProps,
  UseFormRegisterReturn,
  useController,
} from "react-hook-form";

interface SelectProps extends SelectPrimitive.SelectProps {
  className?: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ className, options, placeholder, ...props }, forwardedRef) => {
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
            placeholder={placeholder ?? "Select an option"}
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
            <SelectPrimitive.Viewport>
              {options.map(({ label, value }) => (
                <SelectItem key={label} label={label} value={value} />
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";

interface SelectItemProps {
  className?: string;
  label: string;
  value: string;
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, label, value, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={cn(
          "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium focus:bg-gray-300 font-primary",
          "radix-disabled:opacity-50",
          "focus:outline-none select-none",
          className
        )}
        {...props}
        value={value}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText className="capitalize">
          {label}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";
