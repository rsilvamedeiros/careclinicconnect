import type { Patient, PatientTag } from "@/entities/patient";
import { CalendarBlank, Envelope, Phone, WarningCircle } from "@/shared/icons";
import { formatAge } from "@/shared/lib/formatters";
import { Avatar, AvatarFallback, Badge, Button, initialsFrom } from "@/shared/ui";

const tagToneMap: Record<PatientTag["tone"], "gold" | "accent" | "success" | "neutral"> = {
  gold: "gold",
  clay: "accent",
  forest: "success",
  neutral: "neutral",
};

export function PatientHeader({ patient }: { patient: Patient }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <AvatarFallback className="text-lg">{initialsFrom(patient.name)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-2xl font-semibold text-ink">{patient.name}</h1>
              {patient.tags.map((tag) => (
                <Badge key={tag.label} tone={tagToneMap[tag.tone]}>
                  {tag.label}
                </Badge>
              ))}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
              <span>{formatAge(patient.birthDate)} anos</span>
              <span className="flex items-center gap-1">
                <Phone size={14} /> {patient.phone}
              </span>
              <span className="flex items-center gap-1">
                <Envelope size={14} /> {patient.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary">
            <CalendarBlank size={16} /> Agendar
          </Button>
          <Button variant="secondary">Ver prontuário</Button>
        </div>
      </div>

      {patient.allergyAlert && (
        <div className="flex items-start gap-2 rounded-md border border-danger-500/30 bg-danger-50 p-3 text-sm text-danger-700">
          <WarningCircle size={18} className="mt-0.5 shrink-0" />
          <p>{patient.allergyAlert}</p>
        </div>
      )}
    </div>
  );
}
