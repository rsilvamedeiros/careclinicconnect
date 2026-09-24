import type { Appointment } from "@/entities/appointment";
import { EmptyState } from "@/shared/ui";

import { AppointmentSlotCard } from "./AppointmentSlotCard";

function groupByProfessional(appointments: Appointment[]): Map<string, Appointment[]> {
  const groups = new Map<string, Appointment[]>();

  for (const appointment of appointments) {
    const existing = groups.get(appointment.professionalName) ?? [];
    existing.push(appointment);
    groups.set(appointment.professionalName, existing);
  }

  for (const list of groups.values()) {
    list.sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());
  }

  return groups;
}

export function AgendaTimeline({ appointments }: { appointments: Appointment[] }) {
  if (appointments.length === 0) {
    return (
      <EmptyState
        title="Nenhum agendamento hoje"
        description="A agenda deste dia está livre."
      />
    );
  }

  const groups = groupByProfessional(appointments);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Array.from(groups.entries()).map(([professionalName, professionalAppointments]) => (
        <div key={professionalName} className="space-y-3">
          <p className="text-ink-muted text-[11px] font-bold tracking-[.13em] uppercase">
            {professionalName}
          </p>
          <div className="space-y-2.5">
            {professionalAppointments.map((appointment) => (
              <AppointmentSlotCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
