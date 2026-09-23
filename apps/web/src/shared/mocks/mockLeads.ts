import type { Lead } from "@/entities/lead";

import { daysAgo } from "./dateHelpers";

export const mockLeads: Lead[] = [
  {
    id: "lead-1",
    patientName: "Camille Duarte",
    source: "Instagram Ads",
    stage: "PROPOSAL",
    ownerName: "Juliana Souza",
    createdAt: daysAgo(1),
  },
  {
    id: "lead-2",
    patientName: "Bruno Kalil",
    source: "Indicação",
    stage: "EVALUATION_SCHEDULED",
    ownerName: "Juliana Souza",
    createdAt: daysAgo(2),
  },
  {
    id: "lead-3",
    patientName: "Sofia Meireles",
    source: "Google Ads",
    stage: "QUALIFIED",
    ownerName: "Renato Farias",
    createdAt: daysAgo(3),
  },
  {
    id: "lead-4",
    patientName: "Diego Ramalho",
    source: "WhatsApp",
    stage: "NEW",
    ownerName: "Juliana Souza",
    createdAt: daysAgo(0),
  },
];
