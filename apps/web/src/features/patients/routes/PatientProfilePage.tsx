import { useParams } from "react-router-dom";

import { PermissionGuard } from "@/shared/ui";
import { EmptyState, Skeleton, Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui";
import { Lock } from "@/shared/icons";

import { DocumentsList } from "../components/DocumentsList";
import { FinanceSummary } from "../components/FinanceSummary";
import { PatientHeader } from "../components/PatientHeader";
import { ProceduresList } from "../components/ProceduresList";
import { TimelineList } from "../components/TimelineList";
import { usePatient } from "../hooks/usePatient";

export function PatientProfilePage() {
  const { patientId } = useParams<{ patientId: string }>();
  const { data, isPending, isError, error } = usePatient(patientId);

  if (isPending) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-24" />
        <Skeleton className="h-64" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState
        title="Não foi possível carregar a paciente"
        description={error instanceof Error ? error.message : "Tente novamente mais tarde."}
      />
    );
  }

  return (
    <div className="space-y-6">
      <PatientHeader patient={data.patient} />

      <Tabs defaultValue="timeline">
        <TabsList>
          <TabsTrigger value="timeline">Linha do tempo</TabsTrigger>
          <TabsTrigger value="documents">Documentos</TabsTrigger>
          <TabsTrigger value="procedures">Procedimentos</TabsTrigger>
          <TabsTrigger value="finance">Financeiro</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline">
          <TimelineList events={data.timeline} />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentsList documents={data.documents} />
        </TabsContent>

        <TabsContent value="procedures">
          <ProceduresList procedures={data.procedures} />
        </TabsContent>

        <TabsContent value="finance">
          <PermissionGuard
            permissions={["finance.read"]}
            fallback={
              <EmptyState
                icon={<Lock size={28} />}
                title="Acesso restrito"
                description="Seu perfil não tem permissão para visualizar dados financeiros desta paciente."
              />
            }
          >
            <FinanceSummary payments={data.payments} />
          </PermissionGuard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
