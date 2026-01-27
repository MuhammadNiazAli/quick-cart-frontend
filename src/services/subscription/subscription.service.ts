import { apiFetch } from "../base_api_client/apiClient";

export type SubscribePayload = {
  email: string;
  discount: number;
};

export type SubscribeResponse = {
  message: string;
};

export const SubscriptionService = {
  subscribe(payload: SubscribePayload): Promise<SubscribeResponse> {
    return apiFetch<SubscribeResponse>("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};
