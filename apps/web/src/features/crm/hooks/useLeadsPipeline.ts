import { useQuery } from "@tanstack/react-query";

import { fetchLeadsPipeline } from "@/services/mock/crmApi.mock";

export function useLeadsPipeline() {
  return useQuery({
    queryKey: ["crm", "leads-pipeline"],
    queryFn: fetchLeadsPipeline,
  });
}
