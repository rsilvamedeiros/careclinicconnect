import type { Icon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import type { ClinicInsight, InsightCategory, InsightSeverity } from "@/entities/insight";
import { CalendarBlank, ChartLineUp, ChatCircleDots, Users, Warning } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";
import { Badge, Button } from "@/shared/ui";

const categoryIcon: Record<InsightCategory, Icon> = {
  no_show_risk: Warning,
  patient_retention: Users,
  lead_follow_up: ChatCircleDots,
  conversion: ChartLineUp,
  schedule_utilization: CalendarBlank,
};

/** Where "acting" on each signal actually takes the user in this app. */
const categoryRoute: Record<InsightCategory, string> = {
  no_show_risk: "/agenda",
  patient_retention: "/pacientes",
  lead_follow_up: "/crm",
  conversion: "/crm",
  schedule_utilization: "/agenda",
};

const severityBadgeTone: Record<InsightSeverity, "danger" | "warning" | "accent"> = {
  critical: "danger",
  attention: "warning",
  info: "accent",
};

const severityLabel: Record<InsightSeverity, string> = {
  critical: "Crítico",
  attention: "Atenção",
  info: "Oportunidade",
};

const severityAccentBar: Record<InsightSeverity, string> = {
  critical: "bg-danger",
  attention: "bg-warning",
  info: "bg-accent",
};

export function InsightCard({ insight }: { insight: ClinicInsight }) {
  const CategoryIcon = categoryIcon[insight.category];
  const navigate = useNavigate();

  return (
    <div className="border-border bg-surface relative overflow-hidden rounded-xl border">
      <span
        aria-hidden="true"
        className={cn("absolute inset-y-0 left-0 w-1", severityAccentBar[insight.severity])}
      />
      <div className="space-y-4 p-5 pl-6">
        <div className="flex items-start justify-between gap-3">
          <span className="bg-surface-muted text-ink-muted flex size-9 shrink-0 items-center justify-center rounded-lg">
            <CategoryIcon size={18} />
          </span>
          <Badge tone={severityBadgeTone[insight.severity]}>
            {severityLabel[insight.severity]}
          </Badge>
        </div>

        <div>
          <p className="text-ink text-sm leading-snug font-semibold">{insight.title}</p>
          <p className="text-ink-muted mt-1.5 text-xs leading-relaxed">{insight.description}</p>
        </div>

        <div className="flex items-end justify-between gap-3 pt-1">
          <div>
            <p className="text-ink-muted text-[10px] font-semibold tracking-[.12em] uppercase">
              {insight.metricLabel}
            </p>
            <p className="font-display text-ink mt-0.5 text-xl font-semibold tabular-nums">
              {insight.metricValue}
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate(categoryRoute[insight.category])}
          >
            {insight.actionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
