import type { ProcedureJourney } from "@/entities/procedure";
import { formatDate } from "@/shared/lib/formatters";
import { procedureJourneyPresentation } from "@/shared/lib/statusTone";
import { Badge, Card, CardContent, EmptyState } from "@/shared/ui";

export function ProceduresList({ procedures }: { procedures: ProcedureJourney[] }) {
  if (procedures.length === 0) {
    return <EmptyState title="Nenhum procedimento" description="Ainda não há procedimentos para esta paciente." />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {procedures.map((procedure) => {
        const status = procedureJourneyPresentation[procedure.status];
        const progressPct = Math.round((procedure.sessionsDone / procedure.sessionsTotal) * 100);

        return (
          <Card key={procedure.id}>
            <CardContent className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-ink">{procedure.procedureName}</p>
                  <p className="text-xs text-ink-muted">{procedure.category}</p>
                </div>
                <Badge tone={status.tone}>{status.label}</Badge>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-ink-muted">
                  <span>
                    Sessão {procedure.sessionsDone} de {procedure.sessionsTotal}
                  </span>
                  <span>{progressPct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-bone-200">
                  <div
                    className="h-full rounded-full bg-accent transition-[width] duration-slow ease-editorial"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              <p className="text-xs text-ink-muted">Iniciado em {formatDate(procedure.startedAt)}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
