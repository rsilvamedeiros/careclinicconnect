import { useAuth } from "@/providers/AuthProvider";
import { Bell, CaretDown, MagnifyingGlass, SignOut } from "@/shared/icons";
import {
  Avatar,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  initialsFrom,
} from "@/shared/ui";

const ROLE_LABELS: Record<string, string> = {
  OWNER: "Proprietária",
  ADMIN: "Administrador",
  MANAGER: "Gerente",
  RECEPTIONIST: "Recepção",
  PROFESSIONAL: "Profissional de saúde",
  COMMERCIAL: "Comercial",
  FINANCE: "Financeiro",
};

export function Topbar() {
  const { currentUser, logout, switchPersona, availablePersonas } = useAuth();

  if (!currentUser) return null;

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border bg-surface px-6">
      <div className="relative w-full max-w-md">
        <MagnifyingGlass className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          placeholder="Buscar pacientes, leads, documentos..."
          className="h-10 w-full rounded-md border border-border bg-surface-muted pl-10 pr-3 text-sm text-ink placeholder:text-ink-muted"
        />
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-muted hover:text-ink">
            Visualizando como <CaretDown size={12} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Persona de demonstração</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {availablePersonas.map((persona) => (
              <DropdownMenuItem key={persona.id} onSelect={() => switchPersona(persona.id)}>
                {persona.name} — {ROLE_LABELS[persona.role]}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          type="button"
          aria-label="Notificações"
          className="flex size-10 items-center justify-center rounded-md text-ink-muted hover:bg-surface-muted hover:text-ink"
        >
          <Bell />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-md p-1 hover:bg-surface-muted">
            <Avatar>
              <AvatarFallback>{initialsFrom(currentUser.name)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <p className="text-sm font-semibold text-ink">{currentUser.name}</p>
              <p className="text-xs font-normal text-ink-muted">
                {ROLE_LABELS[currentUser.role]} · {currentUser.tenant.name}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={logout}>
              <SignOut size={16} /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
