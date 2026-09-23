import { Outlet } from "react-router-dom";
import { Logo } from "@/shared/ui";

export function AuthLayout() {
  return (
    <div className="bg-surface grid min-h-screen lg:grid-cols-[minmax(25rem,44%)_1fr]">
      <aside className="bg-ink-900 relative hidden flex-col p-10 lg:flex xl:px-16 xl:py-12">
        <Logo className="text-bone-50 [&>span:last-child>span]:text-clay-300" />

        <div className="my-auto max-w-[31rem] py-16">
          <p className="text-clay-300 mb-6 text-xs font-semibold tracking-[.18em] uppercase">
            Gestão que acompanha o cuidado
          </p>
          <h2 className="font-display text-bone-50 text-[2.65rem] leading-[1.12] font-medium tracking-[-.045em] xl:text-[3.15rem]">
            Sua clínica, organizada para o que realmente importa.
          </h2>
          <p className="text-bone-400 mt-6 max-w-md text-[15px] leading-7">
            Uma visão clara da agenda, dos pacientes e da operação — do primeiro contato ao
            pós-atendimento.
          </p>

          <dl className="border-bone-50/10 mt-12 grid grid-cols-3 border-t pt-6">
            <div>
              <dt className="text-bone-500 text-[10px] font-semibold tracking-[.14em] uppercase">
                Hoje
              </dt>
              <dd className="text-bone-100 mt-2 text-sm font-medium">Agenda centralizada</dd>
            </div>
            <div className="border-bone-50/10 border-l pl-5">
              <dt className="text-bone-500 text-[10px] font-semibold tracking-[.14em] uppercase">
                Pacientes
              </dt>
              <dd className="text-bone-100 mt-2 text-sm font-medium">Histórico contínuo</dd>
            </div>
            <div className="border-bone-50/10 border-l pl-5">
              <dt className="text-bone-500 text-[10px] font-semibold tracking-[.14em] uppercase">
                Gestão
              </dt>
              <dd className="text-bone-100 mt-2 text-sm font-medium">Dados em contexto</dd>
            </div>
          </dl>
        </div>

        <div className="text-bone-500 flex items-center justify-between text-[11px]">
          <span>CareClinicConnect © {new Date().getFullYear()}</span>
          <span>Privacidade · Segurança</span>
        </div>
      </aside>

      <main className="bg-surface relative flex min-h-screen items-center justify-center px-6 py-10 sm:px-12 lg:px-16">
        <div className="text-ink-muted absolute top-8 right-8 hidden text-xs xl:block">
          Precisa de ajuda?{" "}
          <button type="button" className="text-ink hover:text-accent font-semibold">
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
