import { NavLink, Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { NAV_ITEMS } from "./navItems";

export function AppShell() {
  return (
    <div className="bg-canvas flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <nav className="border-border bg-surface flex gap-1 overflow-x-auto border-b px-3 py-2 md:hidden">
          {NAV_ITEMS.slice(0, 4).map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
                  isActive ? "bg-clay-50 text-accent" : "text-ink-muted hover:bg-surface-muted"
                }`
              }
            >
              <Icon size={16} weight="duotone" />
              {label}
            </NavLink>
          ))}
        </nav>
        <main className="mx-auto w-full max-w-[var(--container-app)] flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10 xl:px-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
