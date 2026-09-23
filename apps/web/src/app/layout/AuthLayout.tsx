import { Outlet } from "react-router-dom";
import { Logo } from "@/shared/ui";

export function AuthLayout() {
  return (
    <div className="bg-surface grid min-h-screen lg:grid-cols-[minmax(28rem,1.05fr)_minmax(28rem,.95fr)]">
      <div className="bg-ink-900 relative hidden flex-col justify-between overflow-hidden p-10 lg:flex xl:p-14">
        <div
          aria-hidden="true"
          className="hairline-grid pointer-events-none absolute inset-0 opacity-50"
        />
        <div
          aria-hidden="true"
          className="border-clay-500/10 absolute -right-48 -bottom-48 size-[34rem] rounded-full border-[7rem]"
        />
        <Logo className="text-bone-50 [&>span:last-child>span]:text-clay-300 relative" />
        <div className="relative max-w-xl space-y-6">
          <span className="text-clay-300 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-[11px] font-semibold tracking-[.13em] uppercase">
            <span className="bg-clay-300 size-1.5 rounded-full" /> Operação clínica integrada
          </span>
          <p className="font-display text-bone-50 text-5xl leading-[1.06] font-semibold tracking-[-.045em] text-balance xl:text-6xl">
            O sistema operacional de cuidado da sua clínica.
          </p>
          <p className="text-bone-400 max-w-lg text-base leading-7">
            Agenda, prontuário, CRM e financeiro conectados em uma única experiência — pensada para
            quem cuida de pessoas, não de planilhas.
          </p>
        </div>
        <p className="text-bone-500 relative text-xs">
          © {new Date().getFullYear()} CareClinicConnect. Todos os direitos reservados.
        </p>
      </div>

      <div className="bg-surface flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-[26rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
