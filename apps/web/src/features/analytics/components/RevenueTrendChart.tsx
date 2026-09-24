import { formatCurrencyCents } from "@/shared/lib/formatters";
import { cn } from "@/shared/lib/cn";
import type { RevenueMonthPoint } from "@/shared/mocks/mockAnalytics";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/ui";

const CHART_HEIGHT_PX = 160;
const MIN_BAR_HEIGHT_PX = 6;

export function RevenueTrendChart({ data }: { data: RevenueMonthPoint[] }) {
  const maxValue = Math.max(...data.map((point) => point.revenueCents));

  return (
    <TooltipProvider delayDuration={150}>
      <div>
        <div
          aria-hidden="true"
          className="flex items-end gap-3"
          style={{ height: CHART_HEIGHT_PX }}
        >
          {data.map((point, index) => {
            const barHeightPx = Math.max(
              (point.revenueCents / maxValue) * CHART_HEIGHT_PX,
              MIN_BAR_HEIGHT_PX,
            );
            const isCurrentMonth = index === data.length - 1;

            return (
              <Tooltip key={point.month}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "flex-1 rounded-t-[4px] transition-colors",
                      isCurrentMonth ? "bg-accent" : "bg-accent/35 hover:bg-accent/55",
                    )}
                    style={{ height: barHeightPx }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {point.month} · {formatCurrencyCents(point.revenueCents)}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
        <div aria-hidden="true" className="mt-2 flex gap-3">
          {data.map((point) => (
            <span
              key={point.month}
              className="text-ink-muted flex-1 text-center text-[11px] font-medium"
            >
              {point.month}
            </span>
          ))}
        </div>

        <table className="sr-only">
          <caption>Faturamento mensal</caption>
          <thead>
            <tr>
              <th scope="col">Mês</th>
              <th scope="col">Faturamento</th>
            </tr>
          </thead>
          <tbody>
            {data.map((point) => (
              <tr key={point.month}>
                <th scope="row">{point.month}</th>
                <td>{formatCurrencyCents(point.revenueCents)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TooltipProvider>
  );
}
