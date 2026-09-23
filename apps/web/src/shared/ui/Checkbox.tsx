import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef } from "react";

import { Check } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";

export const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "flex size-4 shrink-0 items-center justify-center rounded-sm border border-border bg-surface",
      "data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-on-accent",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator>
      <Check size={12} weight="bold" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";
