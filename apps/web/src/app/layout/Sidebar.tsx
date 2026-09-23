import { NAV_ITEMS } from "./navItems";
import { NavItem } from "./NavItem";
import { CaretDown } from "@/shared/icons";
import { Logo } from "@/shared/ui";

const NAV_SECTIONS = [
  {
    label: "Atendimento",
    items: NAV_ITEMS.filter((item) =>
      ["/dashboard", "/agenda", "/pacientes", "/clinica"].includes(item.to),
    ),
  },
  {
    label: "Crescimento",
    items: NAV_ITEMS.filter((item) => ["/crm", "/automacao", "/analytics"].includes(item.to)),
  },
  {
    label: "Administração",
    items: NAV_ITEMS.filter((item) => ["/financeiro", "/configuracoes"].includes(item.to)),
  },
];

export function Sidebar() {
  return (
    <aside className="bg-ink-900 hidden w-[17.5rem] shrink-0 flex-col border-r border-black/10 px-4 py-5 md:flex">
      <Logo className="text-bone-50 [&>span:last-child>span]:text-clay-300 px-2" />

      <button
        type="button"
        className="mt-7 flex w-full items-center gap-3 border-y border-white/[.08] px-2 py-4 text-left transition-colors hover:bg-white/[.025]"
        aria-label="Trocar clínica"
      >
        <span className="bg-clay-500/20 text-clay-300 grid size-9 shrink-0 place-items-center rounded-lg text-xs font-bold">
          LC
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-bone-500 block text-[10px] font-semibold tracking-[.12em] uppercase">
            Clínica atual
          </span>
          <span className="text-bone-100 mt-0.5 block truncate text-sm font-semibold">
            Lumière Clínica
          </span>
        </span>
        <CaretDown size={14} className="text-bone-500" />
      </button>

      <nav className="mt-6 flex flex-col gap-6" aria-label="Navegação principal">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label}>
            <p className="text-bone-500 mb-2 px-3 text-[10px] font-semibold tracking-[.14em] uppercase">
              {section.label}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/[.08] px-3 pt-4">
        <div className="text-bone-300 flex items-center gap-2 text-xs font-medium">
          <span className="bg-forest-300 size-1.5 rounded-full" />
          Sistemas operacionais
        </div>
        <p className="text-bone-500 mt-1.5 pl-3.5 text-[11px]">Última sincronização: agora</p>
      </div>
    </aside>
  );
}
