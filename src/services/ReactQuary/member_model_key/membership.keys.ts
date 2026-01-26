export const membershipKeys = {
  all: ["membership"] as const,
  informAdmin: () => [...membershipKeys.all, "inform-admin"] as const,
};
