import { useQuery } from "@tanstack/react-query";
import { AdminService } from "@/services/admin_getprofile_api_layred/admin.service";
import { adminKeys } from "@/services/ReactQuary/admin_keys/admin.keys";

export const useAdminProfile = () => {
  return useQuery({
    queryKey: adminKeys.profile(),
    queryFn: AdminService.getProfile,
  });
};
