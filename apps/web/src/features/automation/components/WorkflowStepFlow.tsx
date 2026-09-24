import type { Icon } from "@phosphor-icons/react";

import type { WorkflowStep, WorkflowStepType } from "@/entities/workflow";
import { ArrowRight, Check, Clock, GitBranch, Lightning } from "@/shared/icons";
import { cn } from "@/shared/lib/cn";

const stepIcon: Record<WorkflowStepType, Icon> = {
  trigger: Lightning,
  wait: Clock,
  action: Check,
  condition: GitBranch,
};

const stepChipStyle: Record<WorkflowStepType, string> = {
  trigger: "bg-accent/10 text-accent",
  wait: "bg-surface-muted text-ink-muted",
  action: "bg-forest-100 text-forest-700",
  condition: "bg-gold-100 text-gold-700",
};

export function WorkflowStepFlow({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => {
        const StepIcon = stepIcon[step.type];
        return (
          <div key={`${step.type}-${index}`} className="flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium",
                stepChipStyle[step.type],
              )}
            >
              <StepIcon size={13} />
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight size={12} className="text-ink-muted/40 shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
