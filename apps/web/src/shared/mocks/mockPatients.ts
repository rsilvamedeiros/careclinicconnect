import type { ClinicalDocument } from "@/entities/clinical";
import type { Payment } from "@/entities/finance";
import type { Patient, PatientListRow } from "@/entities/patient";
import type { ProcedureJourney } from "@/entities/procedure";
import type { TimelineEvent } from "@/entities/timeline";

import { daysAgo, daysFromNow } from "./dateHelpers";

export const featuredPatientId = "patient-1";

export const mockPatient: Patient = {
  id: featuredPatientId,
  name: "Marina Costa",
  birthDate: "1991-04-12",
  phone: "(11) 98421-7733",
  email: "marina.costa@email.com",
  tags: [
    { label: "VIP", tone: "gold" },
    { label: "Pele sensível", tone: "clay" },
  ],
  allergyAlert: "Alergia a lidocaína — confirmar anestésico alternativo antes de procedimentos.",
  createdAt: daysAgo(420),
  consents: [
    { id: "consent-1", type: "contractual", label: "Contrato de prestação de serviço", signedAt: daysAgo(420) },
    { id: "consent-2", type: "clinical", label: "Termo de consentimento clínico", signedAt: daysAgo(30) },
    { id: "consent-3", type: "image_use", label: "Uso de imagem (antes/depois)", signedAt: daysAgo(30) },
    { id: "consent-4", type: "communication", label: "Comunicação via WhatsApp", signedAt: daysAgo(420) },
  ],
};

export const mockPatientListRows: PatientListRow[] = [
  {
    id: featuredPatientId,
    name: "Marina Costa",
    phone: "(11) 98421-7733",
    lastVisit: daysAgo(2),
    tags: [{ label: "VIP", tone: "gold" }],
  },
  {
    id: "patient-2",
    name: "Fernanda Lima",
    phone: "(11) 97733-1120",
    lastVisit: daysAgo(15),
    tags: [],
  },
  {
    id: "patient-3",
    name: "Rafael Torres",
    phone: "(11) 96622-4410",
    lastVisit: daysAgo(6),
    tags: [{ label: "Pele sensível", tone: "clay" }],
  },
  {
    id: "patient-4",
    name: "Patrícia Nunes",
    phone: "(11) 95511-8890",
    lastVisit: daysAgo(1),
    tags: [],
  },
  {
    id: "patient-5",
    name: "Vitor Almeida",
    phone: "(11) 94400-2231",
    lastVisit: null,
    tags: [{ label: "Novo lead", tone: "forest" }],
  },
  {
    id: "patient-6",
    name: "Helena Prado",
    phone: "(11) 93399-7765",
    lastVisit: daysAgo(95),
    tags: [{ label: "Inativa", tone: "neutral" }],
  },
];

const unsortedPatientTimeline: TimelineEvent[] = [
  {
    id: "tl-1",
    patientId: featuredPatientId,
    type: "consulta",
    title: "Retorno pós-harmonização",
    description: "Avaliação de resultado com Dra. Beatriz Nogueira — evolução dentro do esperado.",
    occurredAt: daysAgo(2),
    authorName: "Dra. Beatriz Nogueira",
  },
  {
    id: "tl-2",
    patientId: featuredPatientId,
    type: "mensagem",
    title: "Confirmação de agendamento enviada",
    description: "Lembrete automático via WhatsApp para a consulta de retorno.",
    occurredAt: daysAgo(3),
  },
  {
    id: "tl-3",
    patientId: featuredPatientId,
    type: "pagamento",
    title: "Pagamento confirmado",
    description: "Parcela 2/3 do pacote de harmonização facial — R$ 890,00.",
    occurredAt: daysAgo(10),
  },
  {
    id: "tl-4",
    patientId: featuredPatientId,
    type: "procedimento",
    title: "Sessão 2 de 4 — Harmonização facial",
    description: "Aplicação de preenchedor realizada sem intercorrências.",
    occurredAt: daysAgo(10),
    authorName: "Dra. Beatriz Nogueira",
  },
  {
    id: "tl-5",
    patientId: featuredPatientId,
    type: "documento",
    title: "Termo de consentimento assinado",
    description: "Assinatura eletrônica confirmada antes da sessão 2.",
    occurredAt: daysAgo(11),
  },
  {
    id: "tl-6",
    patientId: featuredPatientId,
    type: "contato",
    title: "Contato pelo Instagram",
    description: "Paciente perguntou sobre tempo de recuperação do procedimento.",
    occurredAt: daysAgo(25),
    authorName: "Juliana Souza",
  },
  {
    id: "tl-7",
    patientId: featuredPatientId,
    type: "retorno",
    title: "Retorno agendado",
    description: "Avaliação de resultado agendada para 90 dias após a última sessão.",
    occurredAt: daysAgo(32),
  },
  {
    id: "tl-8",
    patientId: featuredPatientId,
    type: "procedimento",
    title: "Sessão 1 de 4 — Harmonização facial",
    description: "Primeira sessão do pacote, sem restrições pós-procedimento relevantes.",
    occurredAt: daysAgo(38),
    authorName: "Dra. Beatriz Nogueira",
  },
];

export const mockPatientTimeline: TimelineEvent[] = [...unsortedPatientTimeline].sort(
  (a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime(),
);

export const mockPatientDocuments: ClinicalDocument[] = [
  {
    id: "doc-1",
    patientId: featuredPatientId,
    type: "termo_consentimento",
    title: "Termo de consentimento — Harmonização facial",
    status: "SIGNED",
    createdAt: daysAgo(11),
  },
  {
    id: "doc-2",
    patientId: featuredPatientId,
    type: "orcamento",
    title: "Orçamento — Pacote harmonização (4 sessões)",
    status: "SIGNED",
    createdAt: daysAgo(40),
  },
  {
    id: "doc-3",
    patientId: featuredPatientId,
    type: "contrato",
    title: "Contrato de prestação de serviço",
    status: "SIGNED",
    createdAt: daysAgo(420),
  },
  {
    id: "doc-4",
    patientId: featuredPatientId,
    type: "atestado",
    title: "Atestado de acompanhamento",
    status: "SENT",
    createdAt: daysAgo(10),
  },
];

export const mockPatientProcedures: ProcedureJourney[] = [
  {
    id: "proc-1",
    patientId: featuredPatientId,
    procedureName: "Harmonização facial",
    category: "Preenchimento",
    status: "IN_PROGRESS",
    sessionsDone: 2,
    sessionsTotal: 4,
    startedAt: daysAgo(38),
  },
  {
    id: "proc-2",
    patientId: featuredPatientId,
    procedureName: "Skinbooster",
    category: "Bioestimulador",
    status: "FOLLOW_UP",
    sessionsDone: 3,
    sessionsTotal: 3,
    startedAt: daysAgo(180),
  },
  {
    id: "proc-3",
    patientId: featuredPatientId,
    procedureName: "Avaliação — Toxina botulínica",
    category: "Toxina botulínica",
    status: "PLANNED",
    sessionsDone: 0,
    sessionsTotal: 1,
    startedAt: daysFromNow(7),
  },
];

export const mockPatientPayments: Payment[] = [
  {
    id: "pay-1",
    patientId: featuredPatientId,
    description: "Pacote harmonização facial — parcela 3/3",
    amountCents: 89000,
    status: "pending",
    dueDate: daysFromNow(5),
  },
  {
    id: "pay-2",
    patientId: featuredPatientId,
    description: "Pacote harmonização facial — parcela 2/3",
    amountCents: 89000,
    status: "paid",
    dueDate: daysAgo(10),
  },
  {
    id: "pay-3",
    patientId: featuredPatientId,
    description: "Pacote harmonização facial — parcela 1/3",
    amountCents: 89000,
    status: "paid",
    dueDate: daysAgo(40),
  },
  {
    id: "pay-4",
    patientId: featuredPatientId,
    description: "Skinbooster — sessão avulsa",
    amountCents: 65000,
    status: "paid",
    dueDate: daysAgo(180),
  },
];
