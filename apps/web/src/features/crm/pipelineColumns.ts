import type { LeadStage } from "@/entities/lead";

/** Kanban column order — the active pipeline flow plus its two terminal states. */
export const PIPELINE_COLUMNS: LeadStage[] = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "EVALUATION_SCHEDULED",
  "PROPOSAL",
  "WON",
  "LOST",
];
