import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MagnifyingGlass } from "@/shared/icons";
import { formatDate } from "@/shared/lib/formatters";
import { Avatar, AvatarFallback, Badge, Card, EmptyState, Skeleton, initialsFrom } from "@/shared/ui";

import { usePatientList } from "../hooks/usePatientList";

export function PatientsListPage() {
  const { data, isPending } = usePatientList();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPatients = (data ?? []).filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink">Pacientes</h1>
        <p className="text-sm text-ink-muted">Busque e acesse a linha do tempo completa de cada paciente.</p>
      </div>

      <div className="relative max-w-md">
        <MagnifyingGlass className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por nome..."
          className="h-10 w-full rounded-md border border-border bg-surface pl-10 pr-3 text-sm text-ink placeholder:text-ink-muted"
        />
      </div>

      <Card>
        {isPending ? (
          <div className="space-y-3 p-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-12" />
            ))}
          </div>
        ) : filteredPatients.length === 0 ? (
          <div className="p-5">
            <EmptyState title="Nenhuma paciente encontrada" description="Tente buscar por outro nome." />
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filteredPatients.map((patient) => (
              <li key={patient.id}>
                <button
                  type="button"
                  onClick={() => navigate(`/pacientes/${patient.id}`)}
                  className="flex w-full items-center gap-4 px-5 py-3.5 text-left transition-colors duration-fast ease-standard hover:bg-surface-muted"
                >
                  <Avatar>
                    <AvatarFallback>{initialsFrom(patient.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">{patient.name}</p>
                    <p className="truncate text-xs text-ink-muted">{patient.phone}</p>
                  </div>
                  <span className="hidden shrink-0 text-xs text-ink-muted sm:block">
                    {patient.lastVisit ? `Última visita em ${formatDate(patient.lastVisit)}` : "Sem visitas"}
                  </span>
                  {patient.tags.map((tag) => (
                    <Badge
                      key={tag.label}
                      tone={tag.tone === "clay" ? "accent" : tag.tone === "forest" ? "success" : tag.tone}
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
