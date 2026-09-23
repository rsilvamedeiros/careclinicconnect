import { useQuery } from "@tanstack/react-query";

import { fetchPatientList } from "@/services/mock/patientsApi.mock";

export function usePatientList() {
  return useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatientList,
  });
}
