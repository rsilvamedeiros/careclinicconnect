import { cn } from "@/shared/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-xl font-semibold tracking-tight text-ink", className)}>
      Care<span className="text-accent">Clinic</span>Connect
    </span>
  );
}
