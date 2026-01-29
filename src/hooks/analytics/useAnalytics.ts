import { useQuery } from "@tanstack/react-query";
import { AnalyticsService } from "@/services/analytics_getallData_api_layred/analytics.service";

export const analyticsKeys = {
  all: ["analytics"] as const,
};

export const useAnalytics = () => {
  return useQuery({
    queryKey: analyticsKeys.all,
    queryFn: () => AnalyticsService.getDashboard(),
  });
};
