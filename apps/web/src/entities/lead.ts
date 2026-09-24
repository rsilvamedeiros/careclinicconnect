/** Mirrors docs/product/12-status-machines.md — Lead */
export const LEAD_STAGES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "EVALUATION_SCHEDULED",
  "PROPOSAL",
  "WON",
  "LOST",
  "ON_HOLD",
] as const;

export type LeadStage = (typeof LEAD_STAGES)[number];

export interface Lead {
  id: string;
  patientName: string;
  source: string;
  stage: LeadStage;
  ownerName: string;
  ownerAvatarUrl?: string;
  estimatedValueCents: number;
  createdAt: string;
}
