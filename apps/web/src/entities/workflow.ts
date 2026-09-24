/** Mirrors the Workflow Engine example in docs/product/07-differentiators.md */
export const WORKFLOW_STATUSES = ["active", "paused"] as const;

export type WorkflowStatus = (typeof WORKFLOW_STATUSES)[number];

export const WORKFLOW_STEP_TYPES = ["trigger", "wait", "action", "condition"] as const;

export type WorkflowStepType = (typeof WORKFLOW_STEP_TYPES)[number];

export interface WorkflowStep {
  type: WorkflowStepType;
  label: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  status: WorkflowStatus;
  steps: WorkflowStep[];
  executionsThisMonth: number;
  successRatePct: number;
}
