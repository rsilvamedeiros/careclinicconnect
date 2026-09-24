/** Mirrors the five Clinic Intelligence signals in docs/product/07-differentiators.md */
export const INSIGHT_CATEGORIES = [
  "no_show_risk",
  "patient_retention",
  "lead_follow_up",
  "conversion",
  "schedule_utilization",
] as const;

export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number];

export const INSIGHT_SEVERITIES = ["info", "attention", "critical"] as const;

export type InsightSeverity = (typeof INSIGHT_SEVERITIES)[number];

export interface ClinicInsight {
  id: string;
  category: InsightCategory;
  severity: InsightSeverity;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  actionLabel: string;
}
