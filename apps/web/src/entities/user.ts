export const ROLES = [
  "OWNER",
  "ADMIN",
  "MANAGER",
  "RECEPTIONIST",
  "PROFESSIONAL",
  "COMMERCIAL",
  "FINANCE",
] as const;

export type Role = (typeof ROLES)[number];

export const PERMISSION_KEYS = [
  "patient.read",
  "patient.create",
  "patient.update",
  "appointment.read",
  "appointment.create",
  "appointment.cancel",
  "clinical.read",
  "clinical.write",
  "crm.read",
  "crm.manage",
  "finance.read",
  "finance.manage",
  "users.manage",
  "settings.manage",
] as const;

export type PermissionKey = (typeof PERMISSION_KEYS)[number];

/**
 * UX-convenience mapping only — mirrors docs/architecture/09-permissions-model.md.
 * Real authorization always happens server-side; hiding UI here is not a security boundary.
 */
export const ROLE_PERMISSIONS: Record<Role, PermissionKey[]> = {
  OWNER: [...PERMISSION_KEYS],
  ADMIN: [...PERMISSION_KEYS],
  MANAGER: [
    "patient.read",
    "patient.create",
    "patient.update",
    "appointment.read",
    "appointment.create",
    "appointment.cancel",
    "clinical.read",
    "crm.read",
    "crm.manage",
    "finance.read",
  ],
  RECEPTIONIST: [
    "patient.read",
    "patient.create",
    "patient.update",
    "appointment.read",
    "appointment.create",
    "appointment.cancel",
    "crm.read",
  ],
  PROFESSIONAL: [
    "patient.read",
    "appointment.read",
    "clinical.read",
    "clinical.write",
  ],
  COMMERCIAL: ["patient.read", "crm.read", "crm.manage"],
  FINANCE: ["patient.read", "finance.read", "finance.manage"],
};

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
  tenant: {
    id: string;
    name: string;
  };
}
