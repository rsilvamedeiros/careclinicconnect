import type { AlertTone, DashboardAlert } from "@/shared/mocks/mockDashboardMetrics";
import { Warning, WarningCircle } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";

const toneStyles: Record<AlertTone, string> = {
  warning: "border-warning-500/30 bg-warning-50 text-warning-700",
  danger: "border-danger-500/30 bg-danger-50 text-danger-700",
  neutral: "border-border bg-surface-muted text-ink-700",
};

export function AlertsPanel({ alerts }: { alerts: DashboardAlert[] }) {
  return (
    <ul className="space-y-2">
      {alerts.map((alert) => (
        <li
          key={alert.id}
          className={cn("flex items-start gap-3 rounded-md border p-3", toneStyles[alert.tone])}
        >
          {alert.tone === "danger" ? (
            <WarningCircle size={18} className="mt-0.5 shrink-0" />
          ) : (
            <Warning size={18} className="mt-0.5 shrink-0" />
          )}
          <div>
            <p className="text-sm font-medium">{alert.title}</p>
            <p className="text-xs opacity-80">{alert.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
