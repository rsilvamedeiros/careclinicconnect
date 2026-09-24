import type { Icon } from "@phosphor-icons/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type FormEvent, useState } from "react";

import type { AiAgentId } from "@/entities/aiAgent";
import {
  ArrowLeft,
  ChartLineUp,
  ChatCircleDots,
  PaperPlaneRight,
  Robot,
  Stethoscope,
  X,
} from "@/shared/icons";
import { cn } from "@/shared/lib/cn";
import { mockAiAgents } from "@/shared/mocks/mockAiAgents";
import { Button } from "@/shared/ui";

import { useAiChat } from "../hooks/useAiChat";

const agentIcon: Record<AiAgentId, Icon> = {
  reception: ChatCircleDots,
  "clinical-copilot": Stethoscope,
  "operations-analyst": ChartLineUp,
};

export function AiAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const { activeAgentId, selectAgent, backToAgentPicker, sendMessage, activeMessages, isSending } =
    useAiChat();

  const activeAgent = mockAiAgents.find((agent) => agent.id === activeAgentId) ?? null;

  async function handleSend(event: FormEvent) {
    event.preventDefault();
    const message = draft;
    if (!message.trim()) return;
    setDraft("");
    await sendMessage(message);
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="Abrir assistente de IA"
          className="bg-ink-900 text-bone-50 hover:bg-ink-800 fixed right-6 bottom-6 z-40 flex size-14 items-center justify-center rounded-full shadow-lg transition-colors"
        >
          <Robot size={24} weight="fill" />
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="bg-ink-900/30 fixed inset-0 z-50" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="border-border bg-surface fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l shadow-lg"
        >
          <DialogPrimitive.Title className="sr-only">Assistente de IA</DialogPrimitive.Title>

          <header className="border-border flex items-center justify-between gap-2 border-b px-4 py-4">
            <div className="flex items-center gap-2">
              {activeAgent && (
                <button
                  type="button"
                  onClick={backToAgentPicker}
                  aria-label="Voltar para a lista de assistentes"
                  className="text-ink-muted hover:text-ink flex size-7 items-center justify-center rounded-md"
                >
                  <ArrowLeft size={16} />
                </button>
              )}
              <p className="text-ink text-sm font-semibold">
                {activeAgent ? activeAgent.name : "Assistentes de IA"}
              </p>
            </div>
            <DialogPrimitive.Close
              aria-label="Fechar assistente de IA"
              className="text-ink-muted hover:text-ink flex size-7 items-center justify-center rounded-md"
            >
              <X size={16} />
            </DialogPrimitive.Close>
          </header>

          {!activeAgent ? (
            <div className="flex-1 space-y-2 overflow-y-auto p-4">
              <p className="text-ink-muted text-xs leading-relaxed">
                Escolha um assistente. Respostas de demonstração — sem modelo de IA real conectado
                neste ambiente.
              </p>
              {mockAiAgents.map((agent) => {
                const AgentIcon = agentIcon[agent.id];
                return (
                  <button
                    key={agent.id}
                    type="button"
                    onClick={() => selectAgent(agent.id)}
                    className="border-border bg-surface hover:border-clay-300 flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-colors"
                  >
                    <span className="bg-accent/10 text-accent flex size-9 shrink-0 items-center justify-center rounded-lg">
                      <AgentIcon size={18} />
                    </span>
                    <span>
                      <span className="text-ink block text-sm font-semibold">{agent.name}</span>
                      <span className="text-ink-muted block text-xs">{agent.tagline}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <>
              <div className="border-border bg-surface-muted border-b px-4 py-2.5">
                <p className="text-ink-muted text-[11px] leading-relaxed">
                  {activeAgent.disclaimer}
                </p>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto p-4">
                {activeMessages.length === 0 && (
                  <p className="text-ink-muted text-sm">{activeAgent.description}</p>
                )}
                {activeMessages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-line",
                      message.role === "user"
                        ? "bg-accent text-on-accent ml-auto"
                        : "bg-surface-muted text-ink",
                    )}
                  >
                    {message.content}
                  </div>
                ))}
                {isSending && (
                  <div className="bg-surface-muted text-ink-muted w-fit rounded-lg px-3 py-2 text-sm">
                    Digitando...
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSend}
                className="border-border flex items-center gap-2 border-t p-3"
              >
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="border-border bg-surface text-ink placeholder:text-ink-muted h-10 flex-1 rounded-md border px-3 text-sm outline-none"
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={!draft.trim() || isSending}
                  aria-label="Enviar mensagem"
                >
                  <PaperPlaneRight size={16} />
                </Button>
              </form>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
