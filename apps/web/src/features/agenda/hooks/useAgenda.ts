import { useQuery } from "@tanstack/react-query";

import { fetchAgenda } from "@/services/mock/agendaApi.mock";

export function useAgenda() {
  return useQuery({
    queryKey: ["agenda"],
    queryFn: fetchAgenda,
  });
}
