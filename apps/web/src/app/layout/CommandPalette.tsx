import type { Icon } from "@phosphor-icons/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { fetchLeadsPipeline } from "@/services/mock/crmApi.mock";
import { fetchPatientList } from "@/services/mock/patientsApi.mock";
import { ChatCircleDots, MagnifyingGlass, Users } from "@/shared/icons";

import { NAV_ITEMS } from "./navItems";

const RESULTS_PER_GROUP = 5;

function isTypingInField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: patients } = useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatientList,
    enabled: open,
  });
  const { data: leads } = useQuery({
    queryKey: ["crm", "leads-pipeline"],
    queryFn: fetchLeadsPipeline,
    enabled: open,
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const isSlash = event.key === "/" && !isTypingInField(event.target);

      if (isShortcut || isSlash) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) setQuery("");
  }

  const normalizedQuery = query.trim().toLowerCase();

  const actionResults = useMemo(
    () =>
      NAV_ITEMS.filter(
        (item) => !item.comingSoon && item.label.toLowerCase().includes(normalizedQuery),
      ).slice(0, RESULTS_PER_GROUP),
    [normalizedQuery],
  );

  const patientResults = useMemo(
    () =>
      (patients ?? [])
        .filter((patient) => patient.name.toLowerCase().includes(normalizedQuery))
        .slice(0, RESULTS_PER_GROUP),
    [patients, normalizedQuery],
  );

  const leadResults = useMemo(
    () =>
      (leads ?? [])
        .filter((lead) => lead.patientName.toLowerCase().includes(normalizedQuery))
        .slice(0, RESULTS_PER_GROUP),
    [leads, normalizedQuery],
  );

  const hasResults = actionResults.length + patientResults.length + leadResults.length > 0;

  function goTo(path: string) {
    navigate(path);
    setOpen(false);
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          className="border-border bg-surface-muted text-ink-muted hover:border-clay-300 relative hidden h-10 w-full max-w-lg items-center gap-2 rounded-md border border-transparent pr-12 pl-10 text-left text-[13px] transition-colors sm:flex"
        >
          <MagnifyingGlass className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
          Buscar pacientes, leads, documentos...
          <span className="border-border text-ink-muted bg-surface pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border px-1.5 py-0.5 text-[10px] font-semibold">
            /
          </span>
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="bg-ink-900/40 fixed inset-0 z-50" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="border-border bg-surface fixed top-24 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border shadow-lg"
        >
          <DialogPrimitive.Title className="sr-only">Busca rápida</DialogPrimitive.Title>

          <div className="border-border flex items-center gap-2 border-b px-4 py-3">
            <MagnifyingGlass size={16} className="text-ink-muted shrink-0" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar pacientes, leads ou ir para uma tela..."
              className="text-ink placeholder:text-ink-muted flex-1 bg-transparent text-sm outline-none"
            />
          </div>

          <div className="max-h-80 overflow-y-auto p-2">
            {!hasResults && (
              <p className="text-ink-muted px-3 py-6 text-center text-sm">Nada encontrado.</p>
            )}

            {actionResults.length > 0 && (
              <CommandGroup label="Ações rápidas">
                {actionResults.map((item) => (
                  <CommandItem
                    key={item.to}
                    icon={item.icon}
                    label={item.label}
                    onSelect={() => goTo(item.to)}
                  />
                ))}
              </CommandGroup>
            )}

            {patientResults.length > 0 && (
              <CommandGroup label="Pacientes">
                {patientResults.map((patient) => (
                  <CommandItem
                    key={patient.id}
                    icon={Users}
                    label={patient.name}
                    description={patient.phone}
                    onSelect={() => goTo(`/pacientes/${patient.id}`)}
                  />
                ))}
              </CommandGroup>
            )}

            {leadResults.length > 0 && (
              <CommandGroup label="Leads">
                {leadResults.map((lead) => (
                  <CommandItem
                    key={lead.id}
                    icon={ChatCircleDots}
                    label={lead.patientName}
                    description={lead.source}
                    onSelect={() => goTo("/crm")}
                  />
                ))}
              </CommandGroup>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function CommandGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-2 last:mb-0">
      <p className="text-ink-muted px-3 py-1.5 text-[10px] font-semibold tracking-[.12em] uppercase">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

function CommandItem({
  icon: ItemIcon,
  label,
  description,
  onSelect,
}: {
  icon: Icon;
  label: string;
  description?: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="hover:bg-surface-muted flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm"
    >
      <ItemIcon size={16} className="text-ink-muted shrink-0" />
      <span className="text-ink flex-1 truncate">{label}</span>
      {description && <span className="text-ink-muted shrink-0 text-xs">{description}</span>}
    </button>
  );
}
