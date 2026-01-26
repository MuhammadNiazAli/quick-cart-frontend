import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services/user_getprofile_api_layred/user.service";
import { userKeys } from "@/services/ReactQuary/user_keys/user.keys";

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) =>
      UserService.updateProfile(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.profile(),
      });
    },
  });
};
