import { useQuery } from "@tanstack/react-query";
import { MembershipService } from "@/services/membership_api_layred/membership.service";
import { membershipKeys } from "@/services/ReactQuary/Membership_keys/membership.keys";

export const useMembershipRequests = () => {
  return useQuery({
    queryKey: membershipKeys.requests(),
    queryFn: MembershipService.getRequests,
  });
};
