import { useMemo, useState } from "react";

import { TIMELINE_EVENT_TYPES, type TimelineEvent, type TimelineEventType } from "@/entities/timeline";
import { cn } from "@/shared/lib/cn";
import { EmptyState } from "@/shared/ui";

import { typeLabel, TimelineItem } from "./TimelineItem";

export function TimelineList({ events }: { events: TimelineEvent[] }) {
  const [activeType, setActiveType] = useState<TimelineEventType | "all">("all");

  const filteredEvents = useMemo(
    () => (activeType === "all" ? events : events.filter((event) => event.type === activeType)),
    [events, activeType],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        <FilterChip active={activeType === "all"} onClick={() => setActiveType("all")}>
          Tudo
        </FilterChip>
        {TIMELINE_EVENT_TYPES.map((type) => (
          <FilterChip key={type} active={activeType === type} onClick={() => setActiveType(type)}>
            {typeLabel[type]}
          </FilterChip>
        ))}
      </div>

      {filteredEvents.length === 0 ? (
        <EmptyState title="Nenhum evento neste filtro" description="Tente selecionar outro tipo de evento." />
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <TimelineItem key={event.id} event={event} />
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-fast ease-standard",
        active
          ? "border-accent bg-clay-50 text-accent-strong"
          : "border-border text-ink-muted hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
