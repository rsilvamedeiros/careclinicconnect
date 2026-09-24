import type { Workflow } from "@/entities/workflow";

export const mockWorkflows: Workflow[] = [
  {
    id: "workflow-post-procedure",
    name: "Pós-procedimento — orientação e retorno",
    description:
      "Acompanha a paciente após o procedimento e cria uma tarefa para o profissional se ela não responder.",
    status: "active",
    steps: [
      { type: "trigger", label: "Procedimento concluído" },
      { type: "wait", label: "Aguardar 24h" },
      { type: "action", label: "Enviar orientação pós-procedimento" },
      { type: "wait", label: "Aguardar 6 dias" },
      { type: "action", label: "Solicitar atualização da paciente" },
      { type: "condition", label: "Se sem resposta em 48h" },
      { type: "action", label: "Criar tarefa para o profissional" },
    ],
    executionsThisMonth: 42,
    successRatePct: 98,
  },
  {
    id: "workflow-appointment-confirmation",
    name: "Confirmação de agendamento",
    description:
      "Reduz faltas confirmando o horário por WhatsApp e alertando a recepção quando não há resposta.",
    status: "active",
    steps: [
      { type: "trigger", label: "Agendamento criado" },
      { type: "wait", label: "24h antes do horário" },
      { type: "action", label: "Enviar lembrete por WhatsApp" },
      { type: "condition", label: "Se não confirmar em 4h" },
      { type: "action", label: "Notificar recepção" },
    ],
    executionsThisMonth: 186,
    successRatePct: 91,
  },
  {
    id: "workflow-patient-reengagement",
    name: "Reengajamento de paciente inativo",
    description:
      "Reativa pacientes sem retorno há 90 dias antes que esfriem, alimentando o CRM se não houver resposta.",
    status: "active",
    steps: [
      { type: "trigger", label: "Paciente sem retorno há 90 dias" },
      { type: "action", label: "Enviar mensagem de reengajamento" },
      { type: "wait", label: "Aguardar 7 dias" },
      { type: "condition", label: "Se sem resposta" },
      { type: "action", label: "Criar lead de reativação no CRM" },
    ],
    executionsThisMonth: 12,
    successRatePct: 67,
  },
  {
    id: "workflow-lead-follow-up",
    name: "Lead sem contato",
    description:
      "Evita que leads esfriem no funil comercial, reatribuindo quando o responsável não age a tempo.",
    status: "paused",
    steps: [
      { type: "trigger", label: "Lead sem contato há 5 dias" },
      { type: "action", label: "Notificar responsável comercial" },
      { type: "wait", label: "Aguardar 2 dias" },
      { type: "condition", label: "Se ainda sem contato" },
      { type: "action", label: "Reatribuir lead" },
    ],
    executionsThisMonth: 0,
    successRatePct: 0,
  },
];
