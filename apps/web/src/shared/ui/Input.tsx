import { forwardRef, useState, type InputHTMLAttributes } from "react";

import { Eye, EyeSlash } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, invalid, ...props }, ref) => {
    if (type === "password") {
      return <PasswordInput ref={ref} className={className} invalid={invalid} {...props} />;
    }

    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 w-full rounded-md border bg-surface px-3 text-sm text-ink placeholder:text-ink-muted",
          "transition-colors duration-fast ease-standard",
          invalid ? "border-danger" : "border-border",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative">
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          className={cn(
            "h-10 w-full rounded-md border bg-surface px-3 pr-10 text-sm text-ink placeholder:text-ink-muted",
            "transition-colors duration-fast ease-standard",
            invalid ? "border-danger" : "border-border",
            className,
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-ink-muted hover:text-ink"
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          tabIndex={-1}
        >
          {visible ? <EyeSlash /> : <Eye />}
        </button>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";
