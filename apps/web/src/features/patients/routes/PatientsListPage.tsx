import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MagnifyingGlass } from "@/shared/icons";
import { formatDate } from "@/shared/lib/formatters";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Card,
  EmptyState,
  Skeleton,
  initialsFrom,
} from "@/shared/ui";

import { usePatientList } from "../hooks/usePatientList";

export function PatientsListPage() {
  const { data, isPending } = usePatientList();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPatients = (data ?? []).filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-7">
      <div className="border-border flex flex-wrap items-end justify-between gap-5 border-b pb-7">
        <div className="space-y-1.5">
          <p className="text-accent text-xs font-bold tracking-[.15em] uppercase">Relacionamento</p>
          <h1 className="font-display text-ink text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
            Pacientes
          </h1>
          <p className="text-ink-muted text-sm">
            Consulte cadastros e acompanhe todo o histórico de cuidado.
          </p>
        </div>
        <p className="text-ink-muted text-xs">{filteredPatients.length} pacientes encontrados</p>
      </div>

      <Card className="overflow-hidden">
        <div className="border-border bg-surface-muted/50 flex items-center border-b px-5 py-4">
          <div className="relative w-full max-w-sm">
            <MagnifyingGlass className="text-ink-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar paciente por nome"
              className="border-border bg-surface text-ink placeholder:text-ink-muted h-10 w-full rounded-md border pr-3 pl-10 text-sm shadow-xs"
            />
          </div>
        </div>
        {isPending ? (
          <div className="space-y-3 p-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-12" />
            ))}
          </div>
        ) : filteredPatients.length === 0 ? (
          <div className="p-5">
            <EmptyState
              title="Nenhuma paciente encontrada"
              description="Tente buscar por outro nome."
            />
          </div>
        ) : (
          <ul className="divide-border divide-y">
            {filteredPatients.map((patient) => (
              <li key={patient.id}>
                <button
                  type="button"
                  onClick={() => navigate(`/pacientes/${patient.id}`)}
                  className="duration-fast ease-standard hover:bg-surface-muted flex w-full items-center gap-4 px-5 py-3.5 text-left transition-colors"
                >
                  <Avatar>
                    <AvatarFallback>{initialsFrom(patient.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-ink truncate text-sm font-medium">{patient.name}</p>
                    <p className="text-ink-muted truncate text-xs">{patient.phone}</p>
                  </div>
                  <span className="text-ink-muted hidden shrink-0 text-xs sm:block">
                    {patient.lastVisit
                      ? `Última visita em ${formatDate(patient.lastVisit)}`
                      : "Sem visitas"}
                  </span>
                  {patient.tags.map((tag) => (
                    <Badge
                      key={tag.label}
                      tone={
                        tag.tone === "clay"
                          ? "accent"
                          : tag.tone === "forest"
                            ? "success"
                            : tag.tone
                      }
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
