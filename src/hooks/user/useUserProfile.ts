import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/services/user_getprofile_api_layred/user.service";
import { userKeys } from "@/services/ReactQuary/user_keys/user.keys";

export const useUserProfile = () => {
  return useQuery({
    queryKey: userKeys.profile(),
    queryFn: UserService.getProfile,
  });
};
