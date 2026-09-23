import { IconContext } from "@phosphor-icons/react";
import type { ReactNode } from "react";

/**
 * Seam for future theming (dark mode, tenant branding). Today it only
 * standardizes the Phosphor icon weight/size app-wide.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <IconContext.Provider value={{ size: 18, weight: "regular" }}>{children}</IconContext.Provider>
  );
}
