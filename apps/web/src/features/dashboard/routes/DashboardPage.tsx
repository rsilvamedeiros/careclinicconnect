import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/providers/AuthProvider";
import { Plus } from "@/shared/icons";
import { formatDate } from "@/shared/lib/formatters";
import { Button, Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/shared/ui";

import { AlertsPanel } from "../components/AlertsPanel";
import { ClinicIntelligencePanel } from "../components/ClinicIntelligencePanel";
import { MetricCard } from "../components/MetricCard";
import { RecentLeadsList } from "../components/RecentLeadsList";
import { TodayAgendaList } from "../components/TodayAgendaList";
import { useDashboardData } from "../hooks/useDashboardData";

const firstNameOf = (fullName: string) => fullName.split(" ")[0];

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 12 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, delay, ease: EDITORIAL_EASE },
  }),
};

export function DashboardPage() {
  const { currentUser } = useAuth();
  const { data, isPending } = useDashboardData();
  const navigate = useNavigate();

  return (
    <div className="space-y-7 lg:space-y-9">
      <div className="border-border flex flex-wrap items-end justify-between gap-5 border-b pb-7">
        <div className="space-y-1.5">
          <p className="text-accent text-xs font-bold tracking-[.15em] uppercase">Visão geral</p>
          <h1 className="font-display text-ink text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
            Bom dia, {currentUser ? firstNameOf(currentUser.name) : ""}
          </h1>
          <p className="text-ink-muted text-sm first-letter:uppercase">
            {formatDate(new Date().toISOString(), "EEEE, d 'de' MMMM")}
          </p>
        </div>
        <Button className="h-11 px-5">
          <Plus size={18} /> Novo agendamento
        </Button>
      </div>

      <motion.div custom={0.05} initial="hidden" animate="show" variants={reveal}>
        {isPending || !data ? (
          <div className="space-y-4">
            <Skeleton className="h-5 w-56" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-44" />
              ))}
            </div>
          </div>
        ) : (
          <ClinicIntelligencePanel insights={data.insights} />
        )}
      </motion.div>

      <div className="border-border bg-surface grid grid-cols-2 overflow-hidden rounded-xl border shadow-sm lg:grid-cols-4">
        {isPending || !data
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-32 rounded-none" />
            ))
          : data.metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                custom={0.1 + index * 0.05}
                initial="hidden"
                animate="show"
                variants={reveal}
                className="border-border border-b even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0"
              >
                <MetricCard metric={metric} />
              </motion.div>
            ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.75fr)_minmax(19rem,.75fr)]">
        <motion.div custom={0.2} initial="hidden" animate="show" variants={reveal}>
          <Card className="overflow-hidden">
            <CardHeader className="border-border flex-row items-end justify-between border-b pb-5">
              <div>
                <p className="text-ink-muted mb-1 text-[11px] font-bold tracking-[.13em] uppercase">
                  Rotina clínica
                </p>
                <CardTitle className="text-xl">Agenda de hoje</CardTitle>
              </div>
              <button
                type="button"
                onClick={() => navigate("/agenda")}
                className="text-accent hover:text-accent-strong text-xs font-semibold"
              >
                Ver agenda completa
              </button>
            </CardHeader>
            <CardContent className="p-0">
              {isPending || !data ? (
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} className="h-14" />
                  ))}
                </div>
              ) : (
                <TodayAgendaList appointments={data.todayAppointments} />
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          custom={0.25}
          initial="hidden"
          animate="show"
          variants={reveal}
          className="space-y-6"
        >
          <Card className="border-ink-900 bg-ink-900 text-bone-50 shadow-md">
            <CardHeader>
              <p className="text-clay-300 text-[11px] font-bold tracking-[.13em] uppercase">
                Atenção necessária
              </p>
              <CardTitle className="text-bone-50">Pendências</CardTitle>
            </CardHeader>
            <CardContent>
              {isPending || !data ? (
                <Skeleton className="h-40" />
              ) : (
                <AlertsPanel alerts={data.alerts} />
              )}
            </CardContent>
          </Card>
          <div className="border-border bg-clay-50 rounded-xl border p-5">
            <p className="text-accent text-xs font-bold tracking-[.12em] uppercase">
              Resumo do dia
            </p>
            <p className="text-ink mt-3 text-3xl font-semibold tracking-tight">
              6 <span className="text-ink-muted text-base font-normal">atendimentos</span>
            </p>
            <div className="bg-clay-100 mt-4 h-1.5 overflow-hidden rounded-full">
              <div className="bg-accent h-full w-[58%] rounded-full" />
            </div>
            <p className="text-ink-muted mt-2 text-xs">58% da agenda concluída ou em andamento</p>
          </div>
        </motion.div>
      </div>

      <motion.div custom={0.3} initial="hidden" animate="show" variants={reveal}>
        <Card className="overflow-hidden">
          <CardHeader className="border-border flex-row items-end justify-between border-b pb-5">
            <div>
              <p className="text-ink-muted mb-1 text-[11px] font-bold tracking-[.13em] uppercase">
                Relacionamento
              </p>
              <CardTitle className="text-xl">Leads recentes</CardTitle>
            </div>
            <button
              type="button"
              onClick={() => navigate("/crm")}
              className="text-accent hover:text-accent-strong text-xs font-semibold"
            >
              Abrir CRM
            </button>
          </CardHeader>
          <CardContent className="p-0">
            {isPending || !data ? (
              <Skeleton className="h-32" />
            ) : (
              <RecentLeadsList leads={data.recentLeads} />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
