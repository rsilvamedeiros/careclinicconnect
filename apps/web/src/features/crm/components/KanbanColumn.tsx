import type { Lead, LeadStage } from "@/entities/lead";
import { formatCurrencyCents } from "@/shared/lib/formatters";
import { leadStagePresentation } from "@/shared/lib/statusTone";
import { Badge, EmptyState } from "@/shared/ui";

import { LeadCard } from "./LeadCard";

export function KanbanColumn({
  stage,
  leads,
  onMoveStage,
}: {
  stage: LeadStage;
  leads: Lead[];
  onMoveStage: (leadId: string, stage: LeadStage) => void;
}) {
  const presentation = leadStagePresentation[stage];
  const totalValueCents = leads.reduce((sum, lead) => sum + lead.estimatedValueCents, 0);

  return (
    <div className="bg-surface-muted/60 flex w-72 shrink-0 flex-col rounded-xl p-3">
      <div className="flex items-center justify-between gap-2 px-1 pb-3">
        <div className="flex items-center gap-2">
          <Badge tone={presentation.tone}>{presentation.label}</Badge>
          <span className="text-ink-muted text-xs font-semibold">{leads.length}</span>
        </div>
        {totalValueCents > 0 && (
          <span className="text-ink-muted text-xs font-medium tabular-nums">
            {formatCurrencyCents(totalValueCents)}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        {leads.length === 0 ? (
          <EmptyState title="Sem leads" className="border-none p-4" />
        ) : (
          leads.map((lead) => <LeadCard key={lead.id} lead={lead} onMoveStage={onMoveStage} />)
        )}
      </div>
    </div>
  );
}
