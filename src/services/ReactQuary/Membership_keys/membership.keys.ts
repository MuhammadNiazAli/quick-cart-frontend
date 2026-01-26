export const membershipKeys = {
  all: ["membership"] as const,
  requests: () => [...membershipKeys.all, "requests"] as const,
  myRecords: () => [...membershipKeys.all, "my-records"] as const,
};
