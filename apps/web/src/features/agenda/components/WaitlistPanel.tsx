import type { WaitlistEntry } from "@/entities/waitlist";
import { formatRelative } from "@/shared/lib/formatters";
import { Button, EmptyState } from "@/shared/ui";

export function WaitlistPanel({ entries }: { entries: WaitlistEntry[] }) {
  if (entries.length === 0) {
    return <EmptyState title="Sem espera" description="Ninguém aguardando encaixe no momento." />;
  }

  return (
    <ul className="divide-border divide-y">
      {entries.map((entry) => (
        <li key={entry.id} className="space-y-2 py-3.5 first:pt-0 last:pb-0">
          <div>
            <p className="text-ink text-sm font-medium">{entry.patientName}</p>
            <p className="text-ink-muted text-xs">{entry.procedureName}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="text-ink-muted text-xs">
              <p>{entry.preferredWindow}</p>
              <p>Aguardando desde {formatRelative(entry.waitingSince)}</p>
            </div>
            <Button variant="secondary" size="sm" className="shrink-0">
              Encaixar
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
