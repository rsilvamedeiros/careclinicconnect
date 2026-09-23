import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef } from "react";

import { cn } from "@/shared/lib/cn";

export const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("text-sm font-medium text-ink-700", className)}
    {...props}
  />
));
Label.displayName = "Label";
