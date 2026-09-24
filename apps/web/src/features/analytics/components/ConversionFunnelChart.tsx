import type { ConversionFunnelStage } from "@/shared/mocks/mockAnalytics";
import { leadStagePresentation } from "@/shared/lib/statusTone";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shared/ui";

export function ConversionFunnelChart({ stages }: { stages: ConversionFunnelStage[] }) {
  const maxCount = Math.max(...stages.map((stage) => stage.count));

  return (
    <TooltipProvider delayDuration={150}>
      <div className="space-y-2.5">
        {stages.map((stage) => {
          const presentation = leadStagePresentation[stage.stage];
          const widthPct = (stage.count / maxCount) * 100;

          return (
            <div key={stage.stage} className="flex items-center gap-3">
              <span className="text-ink-muted w-36 shrink-0 text-xs font-medium">
                {presentation.label}
              </span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    aria-hidden="true"
                    className="bg-surface-muted h-6 flex-1 overflow-hidden rounded-md"
                  >
                    <div
                      className="bg-accent h-full rounded-md"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{stage.count} leads</TooltipContent>
              </Tooltip>
              <span className="text-ink w-10 shrink-0 text-right text-xs font-semibold tabular-nums">
                {stage.count}
              </span>
            </div>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
