import type { Payment } from "@/entities/finance";
import { formatCurrencyCents, formatDate } from "@/shared/lib/formatters";
import { paymentStatusPresentation } from "@/shared/lib/statusTone";
import { Badge, EmptyState } from "@/shared/ui";

export function FinanceSummary({ payments }: { payments: Payment[] }) {
  if (payments.length === 0) {
    return <EmptyState title="Nenhum lançamento" description="Ainda não há lançamentos financeiros." />;
  }

  return (
    <ul className="divide-y divide-border">
      {payments.map((payment) => {
        const status = paymentStatusPresentation[payment.status];
        return (
          <li key={payment.id} className="flex items-center justify-between gap-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{payment.description}</p>
              <p className="text-xs text-ink-muted">Vencimento em {formatDate(payment.dueDate)}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-sm font-semibold text-ink">
                {formatCurrencyCents(payment.amountCents)}
              </span>
              <Badge tone={status.tone}>{status.label}</Badge>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
