export const adminKeys = {
  all: ["admin"] as const,
  profile: () => [...adminKeys.all, "profile"] as const,
};
