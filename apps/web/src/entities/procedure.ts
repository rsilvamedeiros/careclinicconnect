/** Mirrors docs/product/12-status-machines.md — Procedure Journey */
export const PROCEDURE_JOURNEY_STATUSES = [
  "PLANNED",
  "SCHEDULED",
  "IN_PROGRESS",
  "COMPLETED",
  "FOLLOW_UP",
  "CLOSED",
] as const;

export type ProcedureJourneyStatus = (typeof PROCEDURE_JOURNEY_STATUSES)[number];

export interface ProcedureJourney {
  id: string;
  patientId: string;
  procedureName: string;
  category: string;
  status: ProcedureJourneyStatus;
  sessionsDone: number;
  sessionsTotal: number;
  startedAt: string;
}
