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
          "bg-surface text-ink placeholder:text-ink-muted h-11 w-full rounded-md border px-3.5 text-sm shadow-xs",
          "duration-fast ease-standard transition-colors",
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
            "bg-surface text-ink placeholder:text-ink-muted h-11 w-full rounded-md border px-3.5 pr-10 text-sm shadow-xs",
            "duration-fast ease-standard transition-colors",
            invalid ? "border-danger" : "border-border",
            className,
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="text-ink-muted hover:text-ink absolute inset-y-0 right-0 flex w-10 items-center justify-center"
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
