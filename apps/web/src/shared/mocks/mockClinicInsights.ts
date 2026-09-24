import type { ClinicInsight } from "@/entities/insight";

export const mockClinicInsights: ClinicInsight[] = [
  {
    id: "insight-no-show",
    category: "no_show_risk",
    severity: "critical",
    title: "Sextas à tarde concentram 3x mais faltas",
    description:
      "Agendamentos entre 14h e 17h de sexta têm taxa de no-show muito acima da média — considere confirmação dupla ou overbooking controlado nesse horário.",
    metricLabel: "Taxa de no-show",
    metricValue: "18%",
    actionLabel: "Ver horários de risco",
  },
  {
    id: "insight-conversion",
    category: "conversion",
    severity: "critical",
    title: "Conversão caiu 8pp nas últimas 2 semanas",
    description:
      "A taxa de conversão de avaliação para procedimento fechado recuou de 22% para 14% — vale revisar o script comercial e o tempo de resposta aos leads.",
    metricLabel: "Conversão atual",
    metricValue: "14%",
    actionLabel: "Investigar funil",
  },
  {
    id: "insight-retention",
    category: "patient_retention",
    severity: "attention",
    title: "12 pacientes sem retorno há mais de 90 dias",
    description:
      "Pacientes com procedimentos concluídos que não agendaram retorno ou reavaliação — janela ideal para reengajamento antes de perder o vínculo.",
    metricLabel: "Pacientes inativos",
    metricValue: "12",
    actionLabel: "Iniciar reengajamento",
  },
  {
    id: "insight-leads",
    category: "lead_follow_up",
    severity: "attention",
    title: "5 leads sem contato há mais de 5 dias",
    description:
      "Leads qualificados parados no funil comercial sem follow-up recente — risco de esfriar e perder para a concorrência.",
    metricLabel: "Leads parados",
    metricValue: "5",
    actionLabel: "Ver leads esquecidos",
  },
  {
    id: "insight-utilization",
    category: "schedule_utilization",
    severity: "info",
    title: "Terça de manhã está com 40% de ocupação",
    description:
      "Horário historicamente ocioso — bom candidato para campanhas de encaixe ou para priorizar retornos e avaliações represadas.",
    metricLabel: "Ocupação da agenda",
    metricValue: "40%",
    actionLabel: "Abrir encaixes",
  },
];
