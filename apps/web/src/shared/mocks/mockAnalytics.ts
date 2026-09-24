import type { LeadStage } from "@/entities/lead";

export interface RevenueMonthPoint {
  month: string;
  revenueCents: number;
}

export const mockRevenueTrend: RevenueMonthPoint[] = [
  { month: "Abr", revenueCents: 9_820_000 },
  { month: "Mai", revenueCents: 10_540_000 },
  { month: "Jun", revenueCents: 11_260_000 },
  { month: "Jul", revenueCents: 10_780_000 },
  { month: "Ago", revenueCents: 12_140_000 },
  { month: "Set", revenueCents: 12_840_000 },
];

export interface ConversionFunnelStage {
  stage: LeadStage;
  count: number;
}

/** Ordered pipeline taper — not derived from the small CRM mock sample on purpose. */
export const mockConversionFunnel: ConversionFunnelStage[] = [
  { stage: "NEW", count: 120 },
  { stage: "CONTACTED", count: 95 },
  { stage: "QUALIFIED", count: 68 },
  { stage: "EVALUATION_SCHEDULED", count: 41 },
  { stage: "PROPOSAL", count: 24 },
  { stage: "WON", count: 15 },
];
