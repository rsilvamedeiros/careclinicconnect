import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import type { CurrentUser } from "@/entities/user";
import { login as loginRequest, type LoginPayload } from "@/services/mock/authApi.mock";
import { mockUsers } from "@/shared/mocks/mockUsers";

interface AuthContextValue {
  currentUser: CurrentUser | null;
  isAuthenticated: boolean;
  isLoggingIn: boolean;
  loginError: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  /** Dev-only: swaps the active persona without a real login, to showcase role-based views. */
  switchPersona: (userId: string) => void;
  availablePersonas: CurrentUser[];
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const login = useCallback(async (payload: LoginPayload) => {
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const user = await loginRequest(payload);
      setCurrentUser(user);
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Não foi possível entrar.");
      throw error;
    } finally {
      setIsLoggingIn(false);
    }
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const switchPersona = useCallback((userId: string) => {
    const persona = mockUsers.find((user) => user.id === userId);
    if (persona) setCurrentUser(persona);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      isAuthenticated: currentUser !== null,
      isLoggingIn,
      loginError,
      login,
      logout,
      switchPersona,
      availablePersonas: mockUsers,
    }),
    [currentUser, isLoggingIn, loginError, login, logout, switchPersona],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
