import { motion } from "motion/react";

import { useAuth } from "@/providers/AuthProvider";
import { Plus } from "@/shared/icons";
import { formatDate } from "@/shared/lib/formatters";
import { Button, Card, CardContent, CardHeader, CardTitle, Skeleton } from "@/shared/ui";

import { AlertsPanel } from "../components/AlertsPanel";
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

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink">
            Bom dia, {currentUser ? firstNameOf(currentUser.name) : ""}
          </h1>
          <p className="text-sm text-ink-muted capitalize">{formatDate(new Date().toISOString(), "EEEE, d 'de' MMMM")}</p>
        </div>
        <Button>
          <Plus size={18} /> Novo agendamento
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {isPending || !data
          ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-28" />)
          : data.metrics.map((metric, index) => (
              <motion.div key={metric.id} custom={index * 0.05} initial="hidden" animate="show" variants={reveal}>
                <MetricCard metric={metric} />
              </motion.div>
            ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <motion.div custom={0.1} initial="hidden" animate="show" variants={reveal} className="xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Agenda de hoje</CardTitle>
            </CardHeader>
            <CardContent>
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

        <motion.div custom={0.15} initial="hidden" animate="show" variants={reveal}>
          <Card>
            <CardHeader>
              <CardTitle>Pendências</CardTitle>
            </CardHeader>
            <CardContent>
              {isPending || !data ? (
                <Skeleton className="h-40" />
              ) : (
                <AlertsPanel alerts={data.alerts} />
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div custom={0.2} initial="hidden" animate="show" variants={reveal}>
        <Card>
          <CardHeader>
            <CardTitle>Leads recentes</CardTitle>
          </CardHeader>
          <CardContent>
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
