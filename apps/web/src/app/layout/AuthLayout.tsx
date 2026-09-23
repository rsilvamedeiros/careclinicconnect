import { Outlet } from "react-router-dom";
import { Logo } from "@/shared/ui";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen bg-[#f3f5f4] lg:grid-cols-[minmax(25rem,44%)_1fr]">
      <aside className="relative hidden flex-col overflow-hidden bg-[#172a3a] p-10 lg:flex xl:px-16 xl:py-12">
        <Logo className="text-white [&>span:first-child]:bg-[#8cb5c2] [&>span:first-child]:text-[#172a3a] [&>span:last-child>span]:text-[#c8d5dc]" />

        <div className="my-auto max-w-[31rem] py-16">
          <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[.16em] text-[#9fc3ce] uppercase">
            <span className="h-px w-8 bg-[#719eab]" /> Gestão clínica
          </p>
          <h2 className="font-display max-w-[29rem] text-[2.7rem] leading-[1.04] font-semibold tracking-[-.055em] text-white xl:text-[3.25rem]">
            Mais clareza para conduzir cada dia da clínica.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-7 text-[#afbec7]">
            Agenda, pacientes e gestão conectados em um fluxo simples — para a equipe trabalhar
            melhor e o cuidado seguir sem ruído.
          </p>

          <dl className="mt-14 grid grid-cols-3 border-t border-white/10 pt-6">
            <div>
              <dt className="text-[10px] font-semibold tracking-[.14em] text-[#78909f] uppercase">
                Hoje
              </dt>
              <dd className="mt-2 text-sm font-medium text-[#e3eaed]">Agenda centralizada</dd>
            </div>
            <div className="border-l border-white/10 pl-5">
              <dt className="text-[10px] font-semibold tracking-[.14em] text-[#78909f] uppercase">
                Pacientes
              </dt>
              <dd className="mt-2 text-sm font-medium text-[#e3eaed]">Histórico contínuo</dd>
            </div>
            <div className="border-l border-white/10 pl-5">
              <dt className="text-[10px] font-semibold tracking-[.14em] text-[#78909f] uppercase">
                Gestão
              </dt>
              <dd className="mt-2 text-sm font-medium text-[#e3eaed]">Dados em contexto</dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#78909f]">
          <span>CareClinicConnect © {new Date().getFullYear()}</span>
          <span>Privacidade · Segurança</span>
        </div>
      </aside>

      <main className="relative flex min-h-screen items-center justify-center bg-[#f3f5f4] px-6 py-10 sm:px-12 lg:px-16">
        <div className="text-ink-muted absolute top-8 right-8 hidden text-xs xl:block">
          Precisa de ajuda?{" "}
          <button type="button" className="font-semibold text-[#172a3a] hover:text-[#416f7d]">
            Fale com o suporte
          </button>
        </div>
        <div className="w-full max-w-[25rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
