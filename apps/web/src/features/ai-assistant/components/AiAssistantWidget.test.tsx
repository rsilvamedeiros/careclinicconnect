import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AiAssistantWidget } from "./AiAssistantWidget";

function renderWidget() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <AiAssistantWidget />
    </QueryClientProvider>,
  );
}

describe("AiAssistantWidget", () => {
  it("lets the user pick the Reception agent and receive a scoped reply", async () => {
    const user = userEvent.setup();
    renderWidget();

    await user.click(screen.getByRole("button", { name: "Abrir assistente de IA" }));
    await user.click(await screen.findByText("Assistente de Recepção"));

    expect(
      screen.getByText("Pode registrar leads e sugerir horários — nunca confirma agendamentos sozinho."),
    ).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Digite sua mensagem...");
    await user.type(input, "Qual o horário de atendimento?");
    await user.click(screen.getByRole("button", { name: "Enviar mensagem" }));

    expect(await screen.findByText(/Atendemos de segunda a sexta/)).toBeInTheDocument();
  });

  it("lets the user go back to the agent picker", async () => {
    const user = userEvent.setup();
    renderWidget();

    await user.click(screen.getByRole("button", { name: "Abrir assistente de IA" }));
    await user.click(await screen.findByText("Analista de Operações"));
    await user.click(screen.getByRole("button", { name: "Voltar para a lista de assistentes" }));

    expect(await screen.findByText("Assistentes de IA")).toBeInTheDocument();
  });
});
