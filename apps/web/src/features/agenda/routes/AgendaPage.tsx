import { formatDate } from "@/shared/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/shared/ui";

import { AgendaTimeline } from "../components/AgendaTimeline";
import { WaitlistPanel } from "../components/WaitlistPanel";
import { useAgenda } from "../hooks/useAgenda";

export function AgendaPage() {
  const { data, isPending } = useAgenda();

  return (
    <div className="space-y-7">
      <div className="border-border flex flex-wrap items-end justify-between gap-5 border-b pb-7">
        <div className="space-y-1.5">
          <p className="text-accent text-xs font-bold tracking-[.15em] uppercase">Rotina clínica</p>
          <h1 className="font-display text-ink text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
            Agenda
          </h1>
          <p className="text-ink-muted text-sm first-letter:uppercase">
            {formatDate(new Date().toISOString(), "EEEE, d 'de' MMMM")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.75fr)_minmax(19rem,.75fr)]">
        <Card className="overflow-hidden">
          <CardHeader className="border-border border-b pb-5">
            <CardTitle className="text-xl">Profissionais de hoje</CardTitle>
          </CardHeader>
          <CardContent>
            {isPending || !data ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="space-y-2.5">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-20" />
                    <Skeleton className="h-20" />
                  </div>
                ))}
              </div>
            ) : (
              <AgendaTimeline appointments={data.appointments} />
            )}
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="border-border border-b pb-5">
            <p className="text-ink-muted mb-1 text-[11px] font-bold tracking-[.13em] uppercase">
              Smart Scheduling
            </p>
            <CardTitle className="text-xl">Lista de espera</CardTitle>
          </CardHeader>
          <CardContent>
            {isPending || !data ? (
              <Skeleton className="h-40" />
            ) : (
              <WaitlistPanel entries={data.waitlist} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
