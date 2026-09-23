import type { Lead } from "@/entities/lead";
import { formatRelative } from "@/shared/lib/formatters";
import { leadStagePresentation } from "@/shared/lib/statusTone";
import { Avatar, AvatarFallback, Badge, initialsFrom } from "@/shared/ui";

export function RecentLeadsList({ leads }: { leads: Lead[] }) {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3">
      {leads.map((lead) => {
        const stage = leadStagePresentation[lead.stage];
        return (
          <li
            key={lead.id}
            className="border-border flex items-center gap-3 border-b px-6 py-4 last:border-b-0 md:border-r md:even:border-r-0 xl:border-b-0 xl:last:border-r-0 xl:even:border-r"
          >
            <Avatar className="size-8">
              <AvatarFallback className="text-xs">{initialsFrom(lead.ownerName)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="text-ink truncate text-sm font-medium">{lead.patientName}</p>
              <p className="text-ink-muted truncate text-xs">
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
