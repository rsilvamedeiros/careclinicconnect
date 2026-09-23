import { NAV_ITEMS } from "./navItems";
import { NavItem } from "./NavItem";

export function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col gap-6 bg-ink-900 px-4 py-6">
      <span className="px-2 font-display text-lg font-semibold tracking-tight text-bone-50">
        Care<span className="text-clay-300">Clinic</span>Connect
      </span>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>
    </aside>
  );
}
