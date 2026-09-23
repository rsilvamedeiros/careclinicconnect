import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { renderWithProviders, screen, waitFor } from "@/test/testUtils";

import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  it("shows a validation error for a too-short password", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LoginForm />);

    await user.clear(screen.getByLabelText("E-mail"));
    await user.type(screen.getByLabelText("E-mail"), "camila@lumiereclinica.com.br");
    await user.type(screen.getByLabelText("Senha"), "abc");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(await screen.findByText("A senha deve ter pelo menos 4 caracteres.")).toBeInTheDocument();
  });

  it("submits valid credentials through the mock auth flow", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LoginForm />);

    await user.clear(screen.getByLabelText("E-mail"));
    await user.type(screen.getByLabelText("E-mail"), "camila@lumiereclinica.com.br");
    await user.type(screen.getByLabelText("Senha"), "senha-valida");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(await screen.findByRole("button", { name: "Entrando..." })).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument(),
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
