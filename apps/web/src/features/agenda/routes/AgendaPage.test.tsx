import { describe, expect, it } from "vitest";

import { renderWithProviders, screen } from "@/test/testUtils";

import { AgendaPage } from "./AgendaPage";

describe("AgendaPage", () => {
  it("groups today's appointments by professional and surfaces no-show risk", async () => {
    renderWithProviders(<AgendaPage />);

    expect(await screen.findByText("Dra. Beatriz Nogueira")).toBeInTheDocument();
    expect(screen.getByText("Dr. Igor Salgado")).toBeInTheDocument();
    expect(screen.getByText(/45% risco de falta/)).toBeInTheDocument();
  });

  it("renders the smart waitlist panel", async () => {
    renderWithProviders(<AgendaPage />);

    expect(await screen.findByText("Lista de espera")).toBeInTheDocument();
    expect(await screen.findByText("Renata Cavalcante")).toBeInTheDocument();
  });
});
