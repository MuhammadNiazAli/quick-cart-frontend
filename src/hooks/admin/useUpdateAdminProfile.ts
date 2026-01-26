import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminService } from "@/services/admin_getprofile_api_layred/admin.service";
import { adminKeys } from "@/services/ReactQuary/admin_keys/admin.keys";

type UpdatePayload = {
  name: string;
  contact: string;
  avatar?: string;
  password?: string;
};

export const useUpdateAdminProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdatePayload) => {
      
      return AdminService.updateProfile({
        ...payload,
        avatar: payload.avatar ?? "",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminKeys.profile() });
    },
  });
};
