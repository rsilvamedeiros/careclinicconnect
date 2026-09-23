import type { Icon } from "@phosphor-icons/react";

import type { TimelineEvent, TimelineEventType } from "@/entities/timeline";
import {
  CalendarBlank,
  ChatCircleDots,
  Clock,
  CreditCard,
  FileText,
  Phone,
  Sparkle,
  Stethoscope,
} from "@/shared/icons";
import { formatDateTime } from "@/shared/lib/formatters";

const typeIcon: Record<TimelineEventType, Icon> = {
  contato: Phone,
  consulta: Stethoscope,
  documento: FileText,
  procedimento: Sparkle,
  pagamento: CreditCard,
  mensagem: ChatCircleDots,
  retorno: CalendarBlank,
};

const typeLabel: Record<TimelineEventType, string> = {
  contato: "Contato",
  consulta: "Consulta",
  documento: "Documento",
  procedimento: "Procedimento",
  pagamento: "Pagamento",
  mensagem: "Mensagem",
  retorno: "Retorno",
};

export { typeIcon, typeLabel, Clock };

export function TimelineItem({ event }: { event: TimelineEvent }) {
  const Icon = typeIcon[event.type];

  return (
    <li className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-clay-100 text-clay-700">
          <Icon size={18} />
        </span>
        <span className="mt-1 w-px flex-1 bg-border" />
      </div>
      <div className="min-w-0 flex-1 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <p className="text-sm font-semibold text-ink">{event.title}</p>
          <span className="flex items-center gap-1 text-xs text-ink-muted">
            <Clock size={12} /> {formatDateTime(event.occurredAt)}
          </span>
        </div>
        <p className="mt-0.5 text-sm text-ink-muted">{event.description}</p>
        {event.authorName && <p className="mt-1 text-xs text-ink-muted">por {event.authorName}</p>}
      </div>
    </li>
  );
}
