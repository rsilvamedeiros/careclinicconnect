import type { Icon } from "@phosphor-icons/react";

import {
  CalendarBlank,
  ChartLineUp,
  ChatCircleDots,
  CreditCard,
  Gauge,
  Gear,
  Robot,
  Stethoscope,
  Users,
} from "@/shared/icons";

export interface NavItemConfig {
  label: string;
  to: string;
  icon: Icon;
  /** Screens not yet built in this scaffold render a shared placeholder. */
  comingSoon?: boolean;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { label: "Dashboard", to: "/dashboard", icon: Gauge },
  { label: "Agenda", to: "/agenda", icon: CalendarBlank },
  { label: "Pacientes", to: "/pacientes", icon: Users },
  { label: "CRM", to: "/crm", icon: ChatCircleDots },
  { label: "Clínica", to: "/clinica", icon: Stethoscope, comingSoon: true },
  { label: "Financeiro", to: "/financeiro", icon: CreditCard, comingSoon: true },
  { label: "Automação", to: "/automacao", icon: Robot },
  { label: "Analytics", to: "/analytics", icon: ChartLineUp },
  { label: "Configurações", to: "/configuracoes", icon: Gear, comingSoon: true },
];
