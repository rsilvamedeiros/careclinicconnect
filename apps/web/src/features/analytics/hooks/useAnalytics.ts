import { useQuery } from "@tanstack/react-query";

import { fetchAnalytics } from "@/services/mock/analyticsApi.mock";

export function useAnalytics() {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: fetchAnalytics,
  });
}
