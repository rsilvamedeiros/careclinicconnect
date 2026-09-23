import { useQuery } from "@tanstack/react-query";

import { fetchPatientProfile } from "@/services/mock/patientsApi.mock";

export function usePatient(patientId: string | undefined) {
  return useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatientProfile(patientId as string),
    enabled: Boolean(patientId),
  });
}
