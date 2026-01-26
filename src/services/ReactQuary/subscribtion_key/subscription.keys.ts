export const subscriptionKeys = {
  all: ["subscription"] as const,
  subscribe: () => [...subscriptionKeys.all, "subscribe"] as const,
};
