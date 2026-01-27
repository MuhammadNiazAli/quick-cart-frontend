import { apiFetch } from "@/services/base_api_client/apiClient";

export type AnalyticsResponse = {
  users: number;
  products: number;
  orders: number;
  salesData: { labels: string[]; data: number[] };
  buyData: { labels: string[]; data: number[] };
  ordersData: number[];
};

export const AnalyticsService = {
  getDashboard(): Promise<AnalyticsResponse> {
    return apiFetch("/api/analytics", { method: "GET" });
  },
};
