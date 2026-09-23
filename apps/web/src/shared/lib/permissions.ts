import { ROLE_PERMISSIONS, type PermissionKey, type Role } from "@/entities/user";

/**
 * UX convenience only — decides what to render, not what's allowed.
 * Real authorization always happens server-side (docs/architecture/09-permissions-model.md).
 */
export function hasPermission(role: Role, key: PermissionKey): boolean {
  return ROLE_PERMISSIONS[role].includes(key);
}

export function hasAnyPermission(role: Role, keys: PermissionKey[]): boolean {
  return keys.some((key) => hasPermission(role, key));
}
