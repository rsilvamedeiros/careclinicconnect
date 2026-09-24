import { useQuery } from "@tanstack/react-query";

import { fetchWorkflows } from "@/services/mock/automationApi.mock";

export function useWorkflows() {
  return useQuery({
    queryKey: ["automation", "workflows"],
    queryFn: fetchWorkflows,
  });
}
