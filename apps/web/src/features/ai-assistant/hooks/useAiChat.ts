import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import type { AiAgentId, ChatMessage } from "@/entities/aiAgent";
import { sendMessageToAgent } from "@/services/mock/aiApi.mock";

type MessagesByAgent = Partial<Record<AiAgentId, ChatMessage[]>>;

export function useAiChat() {
  const [activeAgentId, setActiveAgentId] = useState<AiAgentId | null>(null);
  const [messagesByAgent, setMessagesByAgent] = useState<MessagesByAgent>({});

  const mutation = useMutation({
    mutationFn: ({ agentId, message }: { agentId: AiAgentId; message: string }) =>
      sendMessageToAgent(agentId, message),
  });

  function selectAgent(agentId: AiAgentId) {
    setActiveAgentId(agentId);
  }

  function backToAgentPicker() {
    setActiveAgentId(null);
  }

  async function sendMessage(message: string) {
    const agentId = activeAgentId;
    if (!agentId || !message.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      createdAt: new Date().toISOString(),
    };

    setMessagesByAgent((current) => ({
      ...current,
      [agentId]: [...(current[agentId] ?? []), userMessage],
    }));

    const reply = await mutation.mutateAsync({ agentId, message });

    setMessagesByAgent((current) => ({
      ...current,
      [agentId]: [...(current[agentId] ?? []), reply],
    }));
  }

  return {
    activeAgentId,
    selectAgent,
    backToAgentPicker,
    sendMessage,
    activeMessages: activeAgentId ? (messagesByAgent[activeAgentId] ?? []) : [],
    isSending: mutation.isPending,
  };
}
