import { useQuery } from "@tanstack/react-query";
import { MembershipService } from "@/services/membership_api_layred/membership.service";
import { membershipKeys } from "@/services/ReactQuary/Membership_keys/membership.keys";

export const useMyMembershipRecords = () => {
  return useQuery({
    queryKey: membershipKeys.myRecords(),
    queryFn: MembershipService.getMyRecords,
  });
};
