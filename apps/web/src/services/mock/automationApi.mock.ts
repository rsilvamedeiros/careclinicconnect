import type { Workflow } from "@/entities/workflow";
import { mockWorkflows } from "@/shared/mocks/mockWorkflows";

import { simulateLatency } from "./latency";

export async function fetchWorkflows(): Promise<Workflow[]> {
  await simulateLatency();
  return mockWorkflows;
}
