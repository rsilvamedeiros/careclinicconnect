import { NavLink } from "react-router-dom";

import { cn } from "@/shared/lib/cn";

import type { NavItemConfig } from "./navItems";

export function NavItem({ label, to, icon: Icon }: NavItemConfig) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-bone-200/80",
          "transition-colors duration-fast ease-standard hover:bg-ink-800 hover:text-bone-50",
          isActive && "bg-ink-800 text-bone-50",
        )
      }
    >
      <Icon size={20} />
      {label}
    </NavLink>
  );
}
