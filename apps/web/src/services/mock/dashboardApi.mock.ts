import { mockAppointmentsToday } from "@/shared/mocks/mockAppointmentsToday";
import {
  type DashboardAlert,
  type DashboardMetric,
  mockDashboardAlerts,
  mockDashboardMetrics,
} from "@/shared/mocks/mockDashboardMetrics";
import { mockLeads } from "@/shared/mocks/mockLeads";
import type { Appointment } from "@/entities/appointment";
import type { Lead } from "@/entities/lead";

import { simulateLatency } from "./latency";

export interface DashboardData {
  metrics: DashboardMetric[];
  todayAppointments: Appointment[];
  alerts: DashboardAlert[];
  recentLeads: Lead[];
}

export async function fetchDashboardData(): Promise<DashboardData> {
  await simulateLatency();

  return {
    metrics: mockDashboardMetrics,
    todayAppointments: mockAppointmentsToday,
    alerts: mockDashboardAlerts,
    recentLeads: mockLeads,
  };
}
