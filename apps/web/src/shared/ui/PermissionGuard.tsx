import type { ReactNode } from "react";

import type { PermissionKey } from "@/entities/user";
import { useAuth } from "@/providers/AuthProvider";
import { hasAnyPermission } from "@/shared/lib/permissions";

export interface PermissionGuardProps {
  permissions: PermissionKey[];
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * UX convenience only: decides what to render, never what's allowed.
 * Real authorization always happens server-side — see
 * docs/architecture/09-permissions-model.md ("Ocultar UI não é mecanismo de segurança").
 */
export function PermissionGuard({ permissions, children, fallback = null }: PermissionGuardProps) {
  const { currentUser } = useAuth();

  if (!currentUser || !hasAnyPermission(currentUser.role, permissions)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
