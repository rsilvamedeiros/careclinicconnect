import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { renderWithProviders, screen } from "@/test/testUtils";

import { AutomationPage } from "./AutomationPage";

describe("AutomationPage", () => {
  it("renders workflows and toggles a workflow's active status", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AutomationPage />);

    const workflowName = "Pós-procedimento — orientação e retorno";
    expect(await screen.findByText(workflowName)).toBeInTheDocument();

    const toggle = screen.getByRole("button", { name: `Pausar ${workflowName}` });
    expect(toggle).toHaveTextContent("Ativo");

    await user.click(toggle);

    expect(
      await screen.findByRole("button", { name: `Ativar ${workflowName}` }),
    ).toHaveTextContent("Pausado");
  });
});
