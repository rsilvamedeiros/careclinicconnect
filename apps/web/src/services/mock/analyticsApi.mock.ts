import type { ClinicInsight } from "@/entities/insight";
import {
  type ConversionFunnelStage,
  type RevenueMonthPoint,
  mockConversionFunnel,
  mockRevenueTrend,
} from "@/shared/mocks/mockAnalytics";
import { mockClinicInsights } from "@/shared/mocks/mockClinicInsights";

import { simulateLatency } from "./latency";

export interface AnalyticsData {
  insights: ClinicInsight[];
  revenueTrend: RevenueMonthPoint[];
  conversionFunnel: ConversionFunnelStage[];
}

export async function fetchAnalytics(): Promise<AnalyticsData> {
  await simulateLatency();

  return {
    insights: mockClinicInsights,
    revenueTrend: mockRevenueTrend,
    conversionFunnel: mockConversionFunnel,
  };
}
