import type { ReactNode } from "react";

import { Label } from "@/shared/ui/Label";

export interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  description?: string;
  children: ReactNode;
}

export function FormField({ id, label, error, description, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {description && !error && <p className="text-xs text-ink-muted">{description}</p>}
      {error && (
        <p role="alert" className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
