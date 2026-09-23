import type { CurrentUser } from "@/entities/user";
import { defaultMockUser, mockUsers } from "@/shared/mocks/mockUsers";

import { simulateLatency } from "./latency";

export interface LoginPayload {
  email: string;
  password: string;
}

/**
 * Mock adapter: swap for a real HTTP call later, the interface stays the same.
 * Tenant is never chosen client-side — it always comes back embedded in the
 * resolved session, per docs/architecture/02-multi-tenancy.md.
 */
export async function login({ email, password }: LoginPayload): Promise<CurrentUser> {
  await simulateLatency();

  if (!password || password.length < 4) {
    throw new Error("Credenciais inválidas. Verifique seu e-mail e senha.");
  }

  const matchedUser = mockUsers.find((user) => user.email === email);
  return matchedUser ?? defaultMockUser;
}
