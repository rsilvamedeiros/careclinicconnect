import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { CommandPalette } from "./CommandPalette";

function renderPalette() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route path="/dashboard" element={<CommandPalette />} />
          <Route path="/pacientes/:patientId" element={<p>Perfil da paciente</p>} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}

describe("CommandPalette", () => {
  it('opens with the "/" shortcut and navigates to a matching patient', async () => {
    const user = userEvent.setup();
    renderPalette();

    await user.keyboard("/");

    const input = await screen.findByPlaceholderText(
      "Buscar pacientes, leads ou ir para uma tela...",
    );
    await user.type(input, "Marina");

    const result = await screen.findByText("Marina Costa");
    await user.click(result);

    expect(await screen.findByText("Perfil da paciente")).toBeInTheDocument();
  });
});
