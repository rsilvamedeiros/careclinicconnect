export type ConsentType = "contractual" | "clinical" | "communication" | "image_use";

export interface Consent {
  id: string;
  type: ConsentType;
  label: string;
  signedAt: string | null;
}

export interface PatientTag {
  label: string;
  tone: "gold" | "clay" | "forest" | "neutral";
}

export interface Patient {
  id: string;
  name: string;
  avatarUrl?: string;
  birthDate: string;
  phone: string;
  email: string;
  tags: PatientTag[];
  allergyAlert?: string;
  createdAt: string;
  consents: Consent[];
}

export interface PatientListRow {
  id: string;
  name: string;
  avatarUrl?: string;
  phone: string;
  lastVisit: string | null;
  tags: PatientTag[];
}
