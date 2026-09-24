import type { WaitlistEntry } from "@/entities/waitlist";

import { daysAgo } from "./dateHelpers";

export const mockWaitlist: WaitlistEntry[] = [
  {
    id: "wait-1",
    patientName: "Renata Cavalcante",
    procedureName: "Avaliação — Preenchimento",
    preferredWindow: "Manhãs, qualquer dia",
    waitingSince: daysAgo(4),
  },
  {
    id: "wait-2",
    patientName: "Gustavo Nery",
    procedureName: "Sessão de laser",
    preferredWindow: "Hoje ou amanhã à tarde",
    waitingSince: daysAgo(1),
  },
  {
    id: "wait-3",
    patientName: "Beatriz Franco",
    procedureName: "Retorno pós-procedimento",
    preferredWindow: "Esta semana, período flexível",
    waitingSince: daysAgo(2),
  },
];
