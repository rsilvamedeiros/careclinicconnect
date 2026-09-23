import type { Lead } from "@/entities/lead";
import { formatRelative } from "@/shared/lib/formatters";
import { leadStagePresentation } from "@/shared/lib/statusTone";
import { Avatar, AvatarFallback, Badge, initialsFrom } from "@/shared/ui";

export function RecentLeadsList({ leads }: { leads: Lead[] }) {
  return (
    <ul className="divide-y divide-border">
      {leads.map((lead) => {
        const stage = leadStagePresentation[lead.stage];
        return (
          <li key={lead.id} className="flex items-center gap-3 py-3">
            <Avatar className="size-8">
              <AvatarFallback className="text-xs">{initialsFrom(lead.ownerName)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{lead.patientName}</p>
              <p className="truncate text-xs text-ink-muted">
                {lead.source} · {formatRelative(lead.createdAt)}
              </p>
            </div>
            <Badge tone={stage.tone}>{stage.label}</Badge>
          </li>
        );
      })}
    </ul>
  );
}
