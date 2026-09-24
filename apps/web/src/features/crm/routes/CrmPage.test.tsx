import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { renderWithProviders, screen } from "@/test/testUtils";

import { CrmPage } from "./CrmPage";

describe("CrmPage", () => {
  it("renders leads across pipeline stages and allows moving a lead to another stage", async () => {
    const user = userEvent.setup();
    renderWithProviders(<CrmPage />);

    expect(await screen.findByText("Pipeline comercial")).toBeInTheDocument();
    expect(await screen.findByText("Diego Ramalho")).toBeInTheDocument();

    const moveLabel = "Mover Diego Ramalho para outro estágio";
    await user.click(screen.getByRole("button", { name: moveLabel }));

    expect(screen.queryByRole("menuitem", { name: "Novo" })).not.toBeInTheDocument();
    await user.click(screen.getByRole("menuitem", { name: "Contatado" }));

    // Moving the lead unmounts its card from the "Novo" column and mounts a
    // new one in "Contatado", so the trigger must be looked up again.
    await user.click(await screen.findByRole("button", { name: moveLabel }));
    expect(await screen.findByRole("menuitem", { name: "Novo" })).toBeInTheDocument();
    expect(screen.queryByRole("menuitem", { name: "Contatado" })).not.toBeInTheDocument();
  });
});
