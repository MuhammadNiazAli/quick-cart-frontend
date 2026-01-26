
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MembershipService } from "@/services/membership_api_layred/membership.service";
import { membershipKeys } from "@/services/ReactQuary/Membership_keys/membership.keys";

export const useUpdateMembershipStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "accepted" | "rejected";
    }) => MembershipService.updateStatus(id, status),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: membershipKeys.requests(),
      });
    },
  });
};
