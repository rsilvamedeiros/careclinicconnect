import type { AiAgent } from "@/entities/aiAgent";

export const mockAiAgents: AiAgent[] = [
  {
    id: "reception",
    name: "Assistente de Recepção",
    tagline: "FAQs, horários e orientações de preparo",
    description:
      "Responde dúvidas frequentes, consulta horários e orienta pacientes antes de encaminhar para um humano.",
    disclaimer: "Pode registrar leads e sugerir horários — nunca confirma agendamentos sozinho.",
  },
  {
    id: "clinical-copilot",
    name: "Copiloto de Atendimento",
    tagline: "Estrutura notas e resume histórico",
    description:
      "Ajuda a organizar e resumir anotações clínicas em rascunho — nunca decide ou registra sozinho.",
    disclaimer: "Todo rascunho exige revisão e confirmação do profissional antes de ir ao prontuário.",
  },
  {
    id: "operations-analyst",
    name: "Analista de Operações",
    tagline: "Explica indicadores e aponta anomalias",
    description:
      "Lê os números do dashboard e do CRM para explicar tendências e sugerir onde olhar primeiro.",
    disclaimer: "Aponta padrões nos dados — decisões de negócio continuam com a equipe.",
  },
];
