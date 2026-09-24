import type { Appointment } from "@/entities/appointment";
import { Warning } from "@/shared/icons";
import { formatTime } from "@/shared/lib/formatters";
import { appointmentStatusPresentation } from "@/shared/lib/statusTone";
import { Avatar, AvatarFallback, Badge, initialsFrom } from "@/shared/ui";

export function AppointmentSlotCard({ appointment }: { appointment: Appointment }) {
  const status = appointmentStatusPresentation[appointment.status];

  return (
    <div className="border-border bg-surface flex items-start gap-3 rounded-lg border p-3">
      <span className="text-ink text-xs font-semibold tabular-nums">
        {formatTime(appointment.startAt)}
      </span>
      <Avatar className="size-8">
        <AvatarFallback className="text-[11px]">
          {initialsFrom(appointment.patientName)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="text-ink truncate text-sm font-medium">{appointment.patientName}</p>
        <p className="text-ink-muted truncate text-xs">{appointment.procedureName}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <Badge tone={status.tone}>{status.label}</Badge>
          {appointment.noShowRiskPct !== undefined && (
            <Badge tone="warning">
              <Warning size={11} /> {appointment.noShowRiskPct}% risco de falta
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
