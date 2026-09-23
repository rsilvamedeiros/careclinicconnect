import type { DashboardMetric } from "@/shared/mocks/mockDashboardMetrics";
import { Card, CardContent } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";

const trendStyles: Record<DashboardMetric["trend"], string> = {
  up: "text-forest-600",
  down: "text-danger-500",
  flat: "text-ink-muted",
};

export function MetricCard({ metric }: { metric: DashboardMetric }) {
  return (
    <Card>
      <CardContent className="space-y-2">
        <p className="text-sm font-medium text-ink-muted">{metric.label}</p>
        <p className="font-display text-3xl font-semibold text-ink">{metric.value}</p>
        <p className={cn("text-xs font-medium", trendStyles[metric.trend])}>{metric.changeLabel}</p>
      </CardContent>
    </Card>
  );
}
