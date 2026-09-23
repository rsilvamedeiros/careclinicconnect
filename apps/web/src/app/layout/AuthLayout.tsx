import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-ink-900 p-12 lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-bone-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-bone-500) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse at top left, black, transparent 70%)",
          }}
        />
        <span className="relative font-display text-lg font-semibold text-bone-50">
          Care<span className="text-clay-300">Clinic</span>Connect
        </span>
        <div className="relative max-w-md space-y-4">
          <p className="font-display text-4xl font-semibold leading-tight tracking-tight text-bone-50">
            O sistema operacional de cuidado da sua clínica.
          </p>
          <p className="text-bone-400">
            Agenda, prontuário, CRM e financeiro conectados em uma única experiência — pensada
            para quem cuida de pessoas, não de planilhas.
          </p>
        </div>
        <p className="relative text-xs text-bone-500">
          © {new Date().getFullYear()} CareClinicConnect. Todos os direitos reservados.
        </p>
      </div>

      <div className="flex items-center justify-center bg-canvas p-8">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
