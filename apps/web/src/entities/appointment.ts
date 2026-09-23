/** Mirrors docs/product/12-status-machines.md — Appointment */
export const APPOINTMENT_STATUSES = [
  "DRAFT",
  "SCHEDULED",
  "CONFIRMED",
  "CHECKED_IN",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
  "NO_SHOW",
] as const;

export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientAvatarUrl?: string;
  professionalName: string;
  procedureName: string;
  startAt: string;
  endAt: string;
  status: AppointmentStatus;
}
