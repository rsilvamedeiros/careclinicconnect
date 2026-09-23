import type { ClinicalDocument } from "@/entities/clinical";
import { formatDate } from "@/shared/lib/formatters";
import { documentStatusPresentation } from "@/shared/lib/statusTone";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  EmptyState,
} from "@/shared/ui";

const documentTypeLabel: Record<ClinicalDocument["type"], string> = {
  contrato: "Contrato",
  termo_consentimento: "Termo de consentimento",
  orcamento: "Orçamento",
  atestado: "Atestado",
};

export function DocumentsList({ documents }: { documents: ClinicalDocument[] }) {
  if (documents.length === 0) {
    return <EmptyState title="Nenhum documento" description="Ainda não há documentos para esta paciente." />;
  }

  return (
    <ul className="divide-y divide-border">
      {documents.map((document) => {
        const status = documentStatusPresentation[document.status];
        return (
          <li key={document.id} className="flex items-center justify-between gap-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{document.title}</p>
              <p className="text-xs text-ink-muted">
                {documentTypeLabel[document.type]} · {formatDate(document.createdAt)}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Badge tone={status.tone}>{status.label}</Badge>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Visualizar
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>{document.title}</DialogTitle>
                  <DialogDescription>
                    Pré-visualização de documento ainda não implementada neste ambiente de
                    demonstração — em produção, este modal renderizaria o PDF/termo assinado.
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
