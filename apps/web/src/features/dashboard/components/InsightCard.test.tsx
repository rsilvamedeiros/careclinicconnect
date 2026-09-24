import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { mockClinicInsights } from "@/shared/mocks/mockClinicInsights";

import { InsightCard } from "./InsightCard";

describe("InsightCard", () => {
  it("navigates to the CRM when acting on a lead follow-up insight", async () => {
    const user = userEvent.setup();
    const leadInsight = mockClinicInsights.find((insight) => insight.category === "lead_follow_up")!;

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route path="/dashboard" element={<InsightCard insight={leadInsight} />} />
          <Route path="/crm" element={<p>Pipeline comercial</p>} />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: leadInsight.actionLabel }));

    expect(await screen.findByText("Pipeline comercial")).toBeInTheDocument();
  });
});
