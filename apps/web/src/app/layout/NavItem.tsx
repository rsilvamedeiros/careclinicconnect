import { NavLink } from "react-router-dom";

import { cn } from "@/shared/lib/cn";

import type { NavItemConfig } from "./navItems";

export function NavItem({ label, to, icon: Icon }: NavItemConfig) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "group text-bone-300 relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
          "duration-fast ease-standard hover:text-bone-50 transition-all hover:bg-white/[.055]",
          isActive &&
            "text-bone-50 before:bg-clay-300 bg-white/[.09] shadow-[inset_0_0_0_1px_rgba(255,255,255,.04)] before:absolute before:-left-1 before:h-5 before:w-0.5 before:rounded-full",
        )
      }
    >
      <Icon
        size={19}
        weight="duotone"
        className="text-bone-400 group-hover:text-clay-300 transition-colors"
      />
      {label}
    </NavLink>
  );
}
