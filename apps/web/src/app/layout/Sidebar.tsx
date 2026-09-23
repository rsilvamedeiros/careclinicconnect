import { NAV_ITEMS } from "./navItems";
import { NavItem } from "./NavItem";
import { Logo } from "@/shared/ui";

export function Sidebar() {
  return (
    <aside className="bg-ink-900 relative hidden w-[17.5rem] shrink-0 flex-col overflow-hidden px-4 py-6 md:flex">
      <div
        aria-hidden="true"
        className="hairline-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <Logo className="text-bone-50 [&>span:last-child>span]:text-clay-300 relative px-2" />
      <div className="text-bone-500 relative mt-8 px-3 text-[10px] font-bold tracking-[.18em] uppercase">
        Workspace
      </div>
      <nav className="relative mt-3 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>
      <div className="relative mt-auto rounded-xl border border-white/10 bg-white/[.045] p-4">
        <div className="text-bone-200 mb-3 flex items-center gap-2 text-xs font-semibold">
          <span className="bg-forest-300 size-1.5 rounded-full shadow-[0_0_0_4px_rgba(143,200,154,.12)]" />
          Clínica em operação
        </div>
        <p className="text-bone-400 text-xs leading-relaxed">
          Dados sincronizados há poucos instantes.
        </p>
      </div>
    </aside>
  );
}
