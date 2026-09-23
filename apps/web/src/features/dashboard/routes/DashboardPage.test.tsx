import { describe, expect, it } from "vitest";

import { renderWithProviders, screen } from "@/test/testUtils";

import { DashboardPage } from "./DashboardPage";

describe("DashboardPage", () => {
  it("renders the KPI metrics once the mock data resolves", async () => {
    renderWithProviders(<DashboardPage />);

    expect(await screen.findByText("Faturamento do mês")).toBeInTheDocument();
    expect(screen.getByText("Agenda de hoje")).toBeInTheDocument();
    expect(screen.getByText("Pendências")).toBeInTheDocument();
    expect(screen.getByText("Leads recentes")).toBeInTheDocument();
  });
});
