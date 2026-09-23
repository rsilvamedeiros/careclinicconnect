import type { AppointmentStatus } from "@/entities/appointment";
import type { DocumentStatus } from "@/entities/clinical";
import type { PaymentStatus } from "@/entities/finance";
import type { LeadStage } from "@/entities/lead";
import type { ProcedureJourneyStatus } from "@/entities/procedure";

type Tone = "neutral" | "success" | "warning" | "danger" | "gold" | "accent";

interface StatusPresentation {
  label: string;
  tone: Tone;
}

export const appointmentStatusPresentation: Record<AppointmentStatus, StatusPresentation> = {
  DRAFT: { label: "Rascunho", tone: "neutral" },
  SCHEDULED: { label: "Agendado", tone: "accent" },
  CONFIRMED: { label: "Confirmado", tone: "success" },
  CHECKED_IN: { label: "Check-in", tone: "gold" },
  IN_PROGRESS: { label: "Em atendimento", tone: "gold" },
  COMPLETED: { label: "Concluído", tone: "success" },
  CANCELLED: { label: "Cancelado", tone: "neutral" },
  NO_SHOW: { label: "Não compareceu", tone: "danger" },
};

export const documentStatusPresentation: Record<DocumentStatus, StatusPresentation> = {
  DRAFT: { label: "Rascunho", tone: "neutral" },
  GENERATED: { label: "Gerado", tone: "accent" },
  SENT: { label: "Enviado", tone: "warning" },
  VIEWED: { label: "Visualizado", tone: "warning" },
  SIGNED: { label: "Assinado", tone: "success" },
  CANCELLED: { label: "Cancelado", tone: "neutral" },
  EXPIRED: { label: "Expirado", tone: "danger" },
};

export const procedureJourneyPresentation: Record<ProcedureJourneyStatus, StatusPresentation> = {
  PLANNED: { label: "Planejado", tone: "neutral" },
  SCHEDULED: { label: "Agendado", tone: "accent" },
  IN_PROGRESS: { label: "Em andamento", tone: "gold" },
  COMPLETED: { label: "Concluído", tone: "success" },
  FOLLOW_UP: { label: "Em acompanhamento", tone: "warning" },
  CLOSED: { label: "Encerrado", tone: "neutral" },
};

export const leadStagePresentation: Record<LeadStage, StatusPresentation> = {
  NEW: { label: "Novo", tone: "accent" },
  CONTACTED: { label: "Contatado", tone: "accent" },
  QUALIFIED: { label: "Qualificado", tone: "gold" },
  EVALUATION_SCHEDULED: { label: "Avaliação agendada", tone: "gold" },
  PROPOSAL: { label: "Proposta enviada", tone: "warning" },
  WON: { label: "Ganho", tone: "success" },
  LOST: { label: "Perdido", tone: "neutral" },
  ON_HOLD: { label: "Em espera", tone: "neutral" },
};

export const paymentStatusPresentation: Record<PaymentStatus, StatusPresentation> = {
  pending: { label: "Pendente", tone: "warning" },
  paid: { label: "Pago", tone: "success" },
  overdue: { label: "Em atraso", tone: "danger" },
  refunded: { label: "Reembolsado", tone: "neutral" },
};
