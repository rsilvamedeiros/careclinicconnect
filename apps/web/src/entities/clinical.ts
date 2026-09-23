/** Mirrors docs/product/12-status-machines.md — Document */
export const DOCUMENT_STATUSES = [
  "DRAFT",
  "GENERATED",
  "SENT",
  "VIEWED",
  "SIGNED",
  "CANCELLED",
  "EXPIRED",
] as const;

export type DocumentStatus = (typeof DOCUMENT_STATUSES)[number];

export type DocumentType = "contrato" | "termo_consentimento" | "orcamento" | "atestado";

export interface ClinicalDocument {
  id: string;
  patientId: string;
  type: DocumentType;
  title: string;
  status: DocumentStatus;
  createdAt: string;
}
