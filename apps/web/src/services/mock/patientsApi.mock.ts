import type { ClinicalDocument } from "@/entities/clinical";
import type { Payment } from "@/entities/finance";
import type { Patient, PatientListRow } from "@/entities/patient";
import type { ProcedureJourney } from "@/entities/procedure";
import type { TimelineEvent } from "@/entities/timeline";
import {
  mockPatient,
  mockPatientDocuments,
  mockPatientListRows,
  mockPatientPayments,
  mockPatientProcedures,
  mockPatientTimeline,
} from "@/shared/mocks/mockPatients";

import { simulateLatency } from "./latency";

export interface PatientProfile {
  patient: Patient;
  timeline: TimelineEvent[];
  documents: ClinicalDocument[];
  procedures: ProcedureJourney[];
  payments: Payment[];
}

export async function fetchPatientList(): Promise<PatientListRow[]> {
  await simulateLatency();
  return mockPatientListRows;
}

export async function fetchPatientProfile(patientId: string): Promise<PatientProfile> {
  await simulateLatency();

  if (patientId !== mockPatient.id) {
    throw new Error("Paciente não encontrado neste ambiente de demonstração.");
  }

  return {
    patient: mockPatient,
    timeline: mockPatientTimeline,
    documents: mockPatientDocuments,
    procedures: mockPatientProcedures,
    payments: mockPatientPayments,
  };
}
