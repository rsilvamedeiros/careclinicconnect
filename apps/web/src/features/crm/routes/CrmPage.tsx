import { KanbanBoard } from "../components/KanbanBoard";

export function CrmPage() {
  return (
    <div className="space-y-7">
      <div className="border-border flex flex-wrap items-end justify-between gap-5 border-b pb-7">
        <div className="space-y-1.5">
          <p className="text-accent text-xs font-bold tracking-[.15em] uppercase">Relacionamento</p>
          <h1 className="font-display text-ink text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
            Pipeline comercial
          </h1>
          <p className="text-ink-muted text-sm">
            Acompanhe cada lead da captação até o fechamento — mova o estágio pelo menu do card.
          </p>
        </div>
      </div>

      <KanbanBoard />
    </div>
  );
}
