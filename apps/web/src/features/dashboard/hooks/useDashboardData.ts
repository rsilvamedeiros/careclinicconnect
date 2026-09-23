import { useQuery } from "@tanstack/react-query";

import { fetchDashboardData } from "@/services/mock/dashboardApi.mock";

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData,
  });
}
