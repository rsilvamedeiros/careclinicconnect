import { cn } from "@/shared/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-ink inline-flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.045em]",
        className,
      )}
    >
      <span className="bg-accent text-on-accent grid size-8 place-items-center rounded-[9px] text-[13px] font-bold tracking-[-0.08em]">
        CC
      </span>
      <span>
        CareClinic<span className="text-ink-muted font-normal">Connect</span>
      </span>
    </span>
  );
}
