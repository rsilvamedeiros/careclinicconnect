import type { Lead, LeadStage } from "@/entities/lead";
import { DotsThreeVertical } from "@/shared/icons";
import { formatCurrencyCents, formatRelative } from "@/shared/lib/formatters";
import { leadStagePresentation } from "@/shared/lib/statusTone";
import {
  Avatar,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  initialsFrom,
} from "@/shared/ui";

import { PIPELINE_COLUMNS } from "../pipelineColumns";

export function LeadCard({
  lead,
  onMoveStage,
}: {
  lead: Lead;
  onMoveStage: (leadId: string, stage: LeadStage) => void;
}) {
  return (
    <div className="border-border bg-surface space-y-3 rounded-lg border p-4 shadow-xs">
      <div className="flex items-start justify-between gap-2">
        <p className="text-ink text-sm font-semibold leading-snug">{lead.patientName}</p>
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label={`Mover ${lead.patientName} para outro estágio`}
            className="text-ink-muted hover:text-ink -mr-1 -mt-1 flex size-6 shrink-0 items-center justify-center rounded-md"
          >
            <DotsThreeVertical size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mover para</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {PIPELINE_COLUMNS.filter((stage) => stage !== lead.stage).map((stage) => (
              <DropdownMenuItem key={stage} onSelect={() => onMoveStage(lead.id, stage)}>
                {leadStagePresentation[stage].label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-ink text-base font-semibold tabular-nums">
        {formatCurrencyCents(lead.estimatedValueCents)}
      </p>

      <div className="flex items-center justify-between gap-2">
        <span className="text-ink-muted text-xs">{lead.source}</span>
        <span className="text-ink-muted text-xs">{formatRelative(lead.createdAt)}</span>
      </div>

      <div className="border-border flex items-center gap-2 border-t pt-3">
        <Avatar className="size-6">
          <AvatarFallback className="text-[10px]">{initialsFrom(lead.ownerName)}</AvatarFallback>
        </Avatar>
        <span className="text-ink-muted truncate text-xs">{lead.ownerName}</span>
      </div>
    </div>
  );
}
