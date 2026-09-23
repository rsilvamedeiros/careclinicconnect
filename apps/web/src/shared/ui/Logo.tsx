import { cn } from "@/shared/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-ink inline-flex items-center gap-2.5 text-lg font-semibold tracking-[-0.035em]",
        className,
      )}
    >
      <span className="bg-accent text-on-accent grid size-8 place-items-center rounded-[10px] text-sm font-bold tracking-[-0.08em]">
        CC
      </span>
      <span>
        CareClinic<span className="text-ink-muted font-normal">Connect</span>
      </span>
    </span>
  );
}
