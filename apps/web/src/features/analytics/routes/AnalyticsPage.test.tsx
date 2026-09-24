import { describe, expect, it } from "vitest";

import { renderWithProviders, screen } from "@/test/testUtils";

import { AnalyticsPage } from "./AnalyticsPage";

describe("AnalyticsPage", () => {
  it("renders the revenue trend, conversion funnel and every clinic insight", async () => {
    renderWithProviders(<AnalyticsPage />);

    expect(await screen.findByText("Faturamento — últimos 6 meses")).toBeInTheDocument();
    expect(await screen.findByRole("row", { name: /Set.*R\$/ })).toBeInTheDocument();

    expect(screen.getByText("Funil de conversão")).toBeInTheDocument();
    expect(await screen.findByText("Ganho")).toBeInTheDocument();
    expect(screen.getByText("15")).toBeInTheDocument();

    expect(await screen.findByText("Sextas à tarde concentram 3x mais faltas")).toBeInTheDocument();
    expect(screen.getByText("Terça de manhã está com 40% de ocupação")).toBeInTheDocument();
  });
});
