export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  changeLabel: string;
  trend: "up" | "down" | "flat";
}

export type AlertTone = "warning" | "danger" | "neutral";

export interface DashboardAlert {
  id: string;
  tone: AlertTone;
  title: string;
  description: string;
}

export const mockDashboardMetrics: DashboardMetric[] = [
  {
    id: "revenue",
    label: "Faturamento do mês",
    value: "R$ 128.400",
    changeLabel: "+12% vs. mês anterior",
    trend: "up",
  },
  {
    id: "occupancy",
    label: "Taxa de ocupação",
    value: "78%",
    changeLabel: "+5 p.p. vs. semana anterior",
    trend: "up",
  },
  {
    id: "new-leads",
    label: "Novos leads",
    value: "34",
    changeLabel: "+8 esta semana",
    trend: "up",
  },
  {
    id: "conversion",
    label: "Conversão de leads",
    value: "22%",
    changeLabel: "-3 p.p. vs. mês anterior",
    trend: "down",
  },
];

export const mockDashboardAlerts: DashboardAlert[] = [
  {
    id: "alert-1",
    tone: "warning",
    title: "3 consentimentos pendentes de assinatura",
    description: "Procedimentos agendados para esta semana sem termo assinado.",
  },
  {
    id: "alert-2",
    tone: "danger",
    title: "2 pagamentos em atraso",
    description: "Parcelas vencidas há mais de 7 dias sem confirmação.",
  },
  {
    id: "alert-3",
    tone: "neutral",
    title: "5 pacientes inativos há 90 dias",
    description: "Sem contato ou agendamento recente — oportunidade de reengajamento.",
  },
];
