import type { Appointment } from "@/entities/appointment";
import type { WaitlistEntry } from "@/entities/waitlist";
import { mockAppointmentsToday } from "@/shared/mocks/mockAppointmentsToday";
import { mockWaitlist } from "@/shared/mocks/mockWaitlist";

import { simulateLatency } from "./latency";

export interface AgendaData {
  appointments: Appointment[];
  waitlist: WaitlistEntry[];
}

export async function fetchAgenda(): Promise<AgendaData> {
  await simulateLatency();

  return {
    appointments: mockAppointmentsToday,
    waitlist: mockWaitlist,
  };
}
