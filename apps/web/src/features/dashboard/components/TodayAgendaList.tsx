import type { Appointment } from "@/entities/appointment";
import { appointmentStatusPresentation } from "@/shared/lib/statusTone";
import { formatTime } from "@/shared/lib/formatters";
import { Avatar, AvatarFallback, Badge, initialsFrom } from "@/shared/ui";

export function TodayAgendaList({ appointments }: { appointments: Appointment[] }) {
  return (
    <ul>
      {appointments.map((appointment) => {
        const status = appointmentStatusPresentation[appointment.status];
        return (
          <li
            key={appointment.id}
            className="group border-border grid grid-cols-[3.75rem_1px_2.5rem_minmax(0,1fr)] items-center gap-3 border-b px-4 py-4 last:border-b-0 sm:grid-cols-[4.5rem_1px_2.5rem_minmax(0,1fr)_auto] sm:gap-4 sm:px-6"
          >
            <span className="font-display text-ink text-sm font-semibold tabular-nums">
              {formatTime(appointment.startAt)}
            </span>
            <span className="bg-border group-hover:bg-clay-300 h-10 w-px transition-colors" />
            <Avatar className="size-9">
              <AvatarFallback>{initialsFrom(appointment.patientName)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="text-ink truncate text-sm font-medium">{appointment.patientName}</p>
              <p className="text-ink-muted truncate text-xs">
                {appointment.procedureName} · {appointment.professionalName}
              </p>
            </div>
            <Badge className="col-start-4 w-fit sm:col-start-auto" tone={status.tone}>
              {status.label}
            </Badge>
          </li>
        );
      })}
    </ul>
  );
}
