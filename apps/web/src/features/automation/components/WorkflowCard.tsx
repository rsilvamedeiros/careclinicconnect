import type { Workflow, WorkflowStatus } from "@/entities/workflow";
import { Pause, Play } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";
import { Card, CardContent } from "@/shared/ui";

import { WorkflowStepFlow } from "./WorkflowStepFlow";

export function WorkflowCard({
  workflow,
  onToggleStatus,
}: {
  workflow: Workflow;
  onToggleStatus: (workflowId: string, status: WorkflowStatus) => void;
}) {
  const isActive = workflow.status === "active";

  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-ink text-sm font-semibold">{workflow.name}</p>
            <p className="text-ink-muted mt-1 text-xs leading-relaxed">{workflow.description}</p>
          </div>
          <button
            type="button"
            aria-label={isActive ? `Pausar ${workflow.name}` : `Ativar ${workflow.name}`}
            onClick={() => onToggleStatus(workflow.id, isActive ? "paused" : "active")}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              isActive
                ? "bg-forest-100 text-forest-700 hover:bg-forest-100/70"
                : "bg-bone-200 text-ink-700 hover:bg-bone-300/70",
            )}
          >
            {isActive ? <Pause size={12} weight="fill" /> : <Play size={12} weight="fill" />}
            {isActive ? "Ativo" : "Pausado"}
          </button>
        </div>

        <WorkflowStepFlow steps={workflow.steps} />

        <div className="border-border flex items-center gap-6 border-t pt-3">
          <div>
            <p className="text-ink-muted text-[10px] font-semibold tracking-[.12em] uppercase">
              Execuções (mês)
            </p>
            <p className="text-ink mt-0.5 text-lg font-semibold tabular-nums">
              {workflow.executionsThisMonth}
            </p>
          </div>
          <div>
            <p className="text-ink-muted text-[10px] font-semibold tracking-[.12em] uppercase">
              Taxa de sucesso
            </p>
            <p className="text-ink mt-0.5 text-lg font-semibold tabular-nums">
              {workflow.successRatePct}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
