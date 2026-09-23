import type { AlertTone, DashboardAlert } from "@/shared/mocks/mockDashboardMetrics";
import { Warning, WarningCircle } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";

const toneStyles: Record<AlertTone, string> = {
  warning: "text-gold-300",
  danger: "text-[#ed9d8d]",
  neutral: "text-clay-300",
};

export function AlertsPanel({ alerts }: { alerts: DashboardAlert[] }) {
  return (
    <ul className="divide-y divide-white/10">
      {alerts.map((alert) => (
        <li
          key={alert.id}
          className={cn("flex items-start gap-3 py-4 first:pt-1 last:pb-0", toneStyles[alert.tone])}
        >
          {alert.tone === "danger" ? (
            <WarningCircle size={18} className="mt-0.5 shrink-0" />
          ) : (
            <Warning size={18} className="mt-0.5 shrink-0" />
          )}
          <div className="text-bone-50">
            <p className="text-sm leading-snug font-medium">{alert.title}</p>
            <p className="text-bone-400 mt-1 text-xs leading-relaxed">{alert.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
