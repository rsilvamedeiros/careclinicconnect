/** Mirrors docs/ai/01-ai-strategy.md and docs/ai/02-ai-agents.md */
export const AI_AGENT_IDS = ["reception", "clinical-copilot", "operations-analyst"] as const;

export type AiAgentId = (typeof AI_AGENT_IDS)[number];

export interface AiAgent {
  id: AiAgentId;
  name: string;
  tagline: string;
  description: string;
  /** Shown at the top of every conversation — per CLAUDE.md, AI suggestions always need human review. */
  disclaimer: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}
