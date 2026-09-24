import { useState } from "react";

import type { WorkflowStatus } from "@/entities/workflow";
import { Plus } from "@/shared/icons";
import { Button, Skeleton } from "@/shared/ui";

import { WorkflowCard } from "../components/WorkflowCard";
import { useWorkflows } from "../hooks/useWorkflows";

export function AutomationPage() {
  const { data, isPending } = useWorkflows();
  // Local, demo-only status overrides layered on top of the query data —
  // there's no backend to persist a real toggle to yet.
  const [statusOverrides, setStatusOverrides] = useState<Record<string, WorkflowStatus>>({});

  function handleToggleStatus(workflowId: string, status: WorkflowStatus) {
    setStatusOverrides((current) => ({ ...current, [workflowId]: status }));
  }

  const workflows = (data ?? []).map((workflow) => {
    const overrideStatus = statusOverrides[workflow.id];
    return overrideStatus ? { ...workflow, status: overrideStatus } : workflow;
  });

  return (
    <div className="space-y-7">
      <div className="border-border flex flex-wrap items-end justify-between gap-5 border-b pb-7">
        <div className="space-y-1.5">
          <p className="text-accent text-xs font-bold tracking-[.15em] uppercase">Automação</p>
          <h1 className="font-display text-ink text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
            Workflows
          </h1>
          <p className="text-ink-muted text-sm">
            Regras que trabalham enquanto sua equipe atende pacientes.
          </p>
        </div>
        <Button className="h-11 px-5">
          <Plus size={18} /> Nova automação
        </Button>
      </div>

      {isPending ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-52" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <WorkflowCard
              key={workflow.id}
              workflow={workflow}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}
