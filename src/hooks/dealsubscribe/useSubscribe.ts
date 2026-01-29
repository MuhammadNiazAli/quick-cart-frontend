import { useMutation } from "@tanstack/react-query";
import { SubscriptionService } from "@/services/subscription/subscription.service";

export type SubscribePayload = {
  email: string;
  discount: number;
};

export const useSubscribe = () => {
  return useMutation({
    mutationKey: ["subscription", "subscribe"],
    mutationFn: (payload: SubscribePayload) =>
      SubscriptionService.subscribe(payload),
  });
};
