import { NavLink } from "react-router-dom";

import { cn } from "@/shared/lib/cn";

import type { NavItemConfig } from "./navItems";

export function NavItem({ label, to, icon: Icon }: NavItemConfig) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "group text-bone-300 relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] font-medium",
          "duration-fast ease-standard hover:text-bone-50 transition-colors hover:bg-white/[.045]",
          isActive &&
            "text-bone-50 before:bg-clay-300 bg-white/[.075] before:absolute before:top-2 before:bottom-2 before:left-0 before:w-0.5 before:rounded-full",
        )
      }
    >
      <Icon
        size={18}
        weight="regular"
        className="text-bone-400 group-hover:text-bone-100 transition-colors"
      />
      {label}
    </NavLink>
  );
}
