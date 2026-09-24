import { useNavigate } from "react-router-dom";

import type { ClinicInsight } from "@/entities/insight";
import { Sparkle } from "@/shared/icons";

import { InsightCard } from "./InsightCard";

export function ClinicIntelligencePanel({ insights }: { insights: ClinicInsight[] }) {
  const featuredInsights = insights.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="bg-accent/10 text-accent flex size-8 shrink-0 items-center justify-center rounded-lg">
            <Sparkle size={16} weight="fill" />
          </span>
          <div>
            <p className="text-ink text-base font-semibold">Inteligência da clínica</p>
            <p className="text-ink-muted text-xs">
              Sinais que pedem atenção antes de virarem problema
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate("/analytics")}
          className="text-accent hover:text-accent-strong text-xs font-semibold"
        >
          Ver todos os insights
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {featuredInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </section>
  );
}
