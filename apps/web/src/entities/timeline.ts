/**
 * Patient 360° timeline — aggregates every touchpoint per docs/ux/01-ux-principles.md
 * (contato, consulta, documento, procedimento, pagamento, mensagem, retorno).
 */
export const TIMELINE_EVENT_TYPES = [
  "contato",
  "consulta",
  "documento",
  "procedimento",
  "pagamento",
  "mensagem",
  "retorno",
] as const;

export type TimelineEventType = (typeof TIMELINE_EVENT_TYPES)[number];

export interface TimelineEvent {
  id: string;
  patientId: string;
  type: TimelineEventType;
  title: string;
  description: string;
  occurredAt: string;
  authorName?: string;
}
