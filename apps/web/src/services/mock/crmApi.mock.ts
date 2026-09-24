import type { Lead } from "@/entities/lead";
import { mockLeads } from "@/shared/mocks/mockLeads";

import { simulateLatency } from "./latency";

export async function fetchLeadsPipeline(): Promise<Lead[]> {
  await simulateLatency();
  return mockLeads;
}
