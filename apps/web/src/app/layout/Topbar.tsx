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
  Logo,
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
    <header className="border-border/80 bg-surface/90 flex h-[4.5rem] shrink-0 items-center justify-between gap-4 border-b px-4 backdrop-blur sm:px-6 lg:px-8">
      <Logo className="md:hidden [&>span:last-child]:hidden" />
      <div className="relative hidden w-full max-w-lg sm:block">
        <MagnifyingGlass className="text-ink-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
        <input
          type="search"
          placeholder="Buscar pacientes, leads, documentos..."
          className="bg-surface-muted text-ink placeholder:text-ink-muted hover:border-border focus:border-clay-300 focus:bg-surface h-10 w-full rounded-md border border-transparent pr-12 pl-10 text-[13px] transition-colors"
        />
        <span className="border-border text-ink-muted bg-surface pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border px-1.5 py-0.5 text-[10px] font-semibold">
          /
        </span>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-border text-ink-muted hover:text-ink hidden items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium lg:flex">
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
          className="text-ink-muted hover:bg-surface-muted hover:text-ink after:bg-danger relative flex size-10 items-center justify-center rounded-lg after:absolute after:top-2 after:right-2 after:size-1.5 after:rounded-full"
        >
          <Bell />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="hover:bg-surface-muted flex items-center gap-2.5 rounded-md py-1 pr-1 pl-2 transition-colors">
            <span className="hidden text-right xl:block">
              <span className="text-ink block text-xs leading-4 font-semibold">
                {currentUser.name}
              </span>
              <span className="text-ink-muted block text-[10px] leading-4">
                {ROLE_LABELS[currentUser.role]}
              </span>
            </span>
            <Avatar>
              <AvatarFallback>{initialsFrom(currentUser.name)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <p className="text-ink text-sm font-semibold">{currentUser.name}</p>
              <p className="text-ink-muted text-xs font-normal">
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
