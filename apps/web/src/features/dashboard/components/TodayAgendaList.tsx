import type { Appointment } from "@/entities/appointment";
import { appointmentStatusPresentation } from "@/shared/lib/statusTone";
import { formatTime } from "@/shared/lib/formatters";
import { Avatar, AvatarFallback, Badge, initialsFrom } from "@/shared/ui";

export function TodayAgendaList({ appointments }: { appointments: Appointment[] }) {
  return (
    <ul className="divide-y divide-border">
      {appointments.map((appointment) => {
        const status = appointmentStatusPresentation[appointment.status];
        return (
          <li key={appointment.id} className="flex items-center gap-4 py-3">
            <span className="w-14 shrink-0 font-display text-sm font-semibold text-ink">
              {formatTime(appointment.startAt)}
            </span>
            <Avatar>
              <AvatarFallback>{initialsFrom(appointment.patientName)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{appointment.patientName}</p>
              <p className="truncate text-xs text-ink-muted">
                {appointment.procedureName} · {appointment.professionalName}
              </p>
            </div>
            <Badge tone={status.tone}>{status.label}</Badge>
          </li>
        );
      })}
    </ul>
  );
}
