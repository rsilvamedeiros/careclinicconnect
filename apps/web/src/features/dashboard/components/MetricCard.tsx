import type { DashboardMetric } from "@/shared/mocks/mockDashboardMetrics";
import { cn } from "@/shared/lib/cn";

const trendStyles: Record<DashboardMetric["trend"], string> = {
  up: "text-forest-600",
  down: "text-danger-500",
  flat: "text-ink-muted",
};

export function MetricCard({ metric }: { metric: DashboardMetric }) {
  return (
    <div className="min-h-32 p-4 sm:p-6">
      <div className="flex h-full flex-col justify-between gap-3">
        <p className="text-ink-muted text-xs font-semibold sm:text-sm">{metric.label}</p>
        <div>
          <p className="font-display text-ink text-2xl font-semibold tracking-[-.04em] sm:text-3xl">
            {metric.value}
          </p>
          <p
            className={cn("mt-1.5 text-[11px] font-semibold sm:text-xs", trendStyles[metric.trend])}
          >
            {metric.changeLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
