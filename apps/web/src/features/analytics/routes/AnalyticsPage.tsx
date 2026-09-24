import { InsightCard } from "@/features/dashboard/components/InsightCard";
import { Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/shared/ui";

import { ConversionFunnelChart } from "../components/ConversionFunnelChart";
import { RevenueTrendChart } from "../components/RevenueTrendChart";
import { useAnalytics } from "../hooks/useAnalytics";

export function AnalyticsPage() {
  const { data, isPending } = useAnalytics();

  return (
    <div className="space-y-7">
      <div className="border-border flex flex-wrap items-end justify-between gap-5 border-b pb-7">
        <div className="space-y-1.5">
          <p className="text-accent text-xs font-bold tracking-[.15em] uppercase">Analytics</p>
          <h1 className="font-display text-ink text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
            Inteligência da clínica
          </h1>
          <p className="text-ink-muted text-sm">
            Todos os sinais operacionais e comerciais, em um só lugar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <p className="text-ink-muted mb-1 text-[11px] font-bold tracking-[.13em] uppercase">
              Financeiro
            </p>
            <CardTitle className="text-xl">Faturamento — últimos 6 meses</CardTitle>
          </CardHeader>
          <CardContent>
            {isPending || !data ? (
              <Skeleton className="h-40" />
            ) : (
              <RevenueTrendChart data={data.revenueTrend} />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="text-ink-muted mb-1 text-[11px] font-bold tracking-[.13em] uppercase">
              Comercial
            </p>
            <CardTitle className="text-xl">Funil de conversão</CardTitle>
          </CardHeader>
          <CardContent>
            {isPending || !data ? (
              <Skeleton className="h-40" />
            ) : (
              <ConversionFunnelChart stages={data.conversionFunnel} />
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-ink text-base font-semibold">Todos os insights</h2>
        {isPending || !data ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-44" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
