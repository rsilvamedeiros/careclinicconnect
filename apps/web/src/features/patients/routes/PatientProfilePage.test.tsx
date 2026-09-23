import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, type ReactNode } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { AuthProvider, useAuth } from "@/providers/AuthProvider";
import { featuredPatientId } from "@/shared/mocks/mockPatients";

import { PatientProfilePage } from "./PatientProfilePage";

function SwitchPersona({ personaId, children }: { personaId: string; children: ReactNode }) {
  const { switchPersona } = useAuth();
  useEffect(() => {
    switchPersona(personaId);
  }, [personaId, switchPersona]);
  return <>{children}</>;
}

function renderProfileAs(personaId: string) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SwitchPersona personaId={personaId}>
          <MemoryRouter initialEntries={[`/pacientes/${featuredPatientId}`]}>
            <Routes>
              <Route path="/pacientes/:patientId" element={<PatientProfilePage />} />
            </Routes>
          </MemoryRouter>
        </SwitchPersona>
      </AuthProvider>
    </QueryClientProvider>,
  );
}

describe("PatientProfilePage", () => {
  it("hides financial data for a role without finance.read", async () => {
    const user = userEvent.setup();
    renderProfileAs("user-receptionist");

    const financeTab = await screen.findByRole("tab", { name: "Financeiro" });
    await user.click(financeTab);

    expect(await screen.findByText("Acesso restrito")).toBeInTheDocument();
  });

  it("shows financial data for a role with finance.read", async () => {
    const user = userEvent.setup();
    renderProfileAs("user-owner");

    const financeTab = await screen.findByRole("tab", { name: "Financeiro" });
    await user.click(financeTab);

    expect(await screen.findByText("Pacote harmonização facial — parcela 3/3")).toBeInTheDocument();
  });
});
