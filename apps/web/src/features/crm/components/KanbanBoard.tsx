import { useState } from "react";

import type { LeadStage } from "@/entities/lead";
import { Skeleton } from "@/shared/ui";

import { useLeadsPipeline } from "../hooks/useLeadsPipeline";
import { PIPELINE_COLUMNS } from "../pipelineColumns";
import { KanbanColumn } from "./KanbanColumn";

export function KanbanBoard() {
  const { data, isPending } = useLeadsPipeline();
  // Local, demo-only stage overrides layered on top of the query data —
  // there's no backend to persist a real stage change to yet.
  const [stageOverrides, setStageOverrides] = useState<Record<string, LeadStage>>({});

  function handleMoveStage(leadId: string, stage: LeadStage) {
    setStageOverrides((current) => ({ ...current, [leadId]: stage }));
  }

  if (isPending) {
    return (
      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-96 w-72 shrink-0 rounded-xl" />
        ))}
      </div>
    );
  }

  const leads = (data ?? []).map((lead) => {
    const overrideStage = stageOverrides[lead.id];
    return overrideStage ? { ...lead, stage: overrideStage } : lead;
  });

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {PIPELINE_COLUMNS.map((stage) => (
        <KanbanColumn
          key={stage}
          stage={stage}
          leads={leads.filter((lead) => lead.stage === stage)}
          onMoveStage={handleMoveStage}
        />
      ))}
    </div>
  );
}
