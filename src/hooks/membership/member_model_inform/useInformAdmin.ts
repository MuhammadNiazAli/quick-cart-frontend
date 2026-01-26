import { useMutation } from "@tanstack/react-query";
import { MembershipService } from "@/services/membership_api_layred/membership.service";

type InformAdminPayload = {
  role: "viewer" | "partner";
  message: string;
};

export const useInformAdmin = () => {
  return useMutation({
    mutationFn: (payload: InformAdminPayload) =>
      MembershipService.informAdmin(payload),
  });
};
