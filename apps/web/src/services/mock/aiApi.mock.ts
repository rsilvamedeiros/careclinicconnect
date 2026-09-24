import type { AiAgentId, ChatMessage } from "@/entities/aiAgent";

import { simulateLatency } from "./latency";

/**
 * Canned, keyword-based replies — there's no real model connected in this
 * environment. Every response stays inside the boundaries set by
 * docs/ai/01-ai-strategy.md (no autonomous clinical decisions, no
 * unreviewed record changes).
 */
function replyFrom(agentId: AiAgentId, message: string): string {
  const normalized = message.toLowerCase();

  if (agentId === "reception") {
    if (/(hor[aá]rio|hora)/.test(normalized)) {
      return "Atendemos de segunda a sexta, das 9h às 19h, e aos sábados das 9h às 13h. Quer que eu registre uma solicitação de agendamento para a recepção confirmar?";
    }
    if (/(endere[cç]o|local|onde fica)/.test(normalized)) {
      return "Ficamos na Av. Paulista, 1000 — São Paulo/SP, próximo ao metrô Trianon-MASP.";
    }
    if (/prepar/.test(normalized)) {
      return "Para a maioria dos procedimentos estéticos recomendamos evitar sol direto e álcool nas 48h anteriores. Me diga qual procedimento que eu confirmo a orientação específica.";
    }
    return "Posso ajudar com horários, endereço e orientações de preparo, e registrar a solicitação para a recepção confirmar. O que você precisa?";
  }

  if (agentId === "clinical-copilot") {
    return (
      "Rascunho estruturado a partir do que você descreveu:\n\n" +
      "**Queixa principal:** " +
      message.slice(0, 80) +
      (message.length > 80 ? "…" : "") +
      "\n**Conduta sugerida:** revisar histórico recente e confirmar evolução na próxima consulta.\n\n" +
      "_Revise e confirme antes de salvar no prontuário — nenhuma informação foi gravada automaticamente._"
    );
  }

  if (/(ocios|ocupa[cç][aã]o|agenda)/.test(normalized)) {
    return 'A terça de manhã está com apenas 40% de ocupação — mesmo padrão do insight "Inteligência da clínica" no Dashboard. Pode ser um bom horário para campanhas de encaixe.';
  }
  if (/(convers[aã]o|lead)/.test(normalized)) {
    return "A conversão de avaliação para procedimento fechado caiu de 22% para 14% nas últimas duas semanas — vale revisar o tempo de resposta aos leads no CRM.";
  }
  return "Posso explicar indicadores do dashboard, apontar anomalias na agenda ou no funil comercial, e resumir a operação. Sobre o que quer saber?";
}

export async function sendMessageToAgent(
  agentId: AiAgentId,
  message: string,
): Promise<ChatMessage> {
  await simulateLatency(500, 1100);

  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: replyFrom(agentId, message),
    createdAt: new Date().toISOString(),
  };
}
