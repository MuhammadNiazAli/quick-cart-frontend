import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth_api_layerd/auth.service";

type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export const useAuthMutation = () => {
  const signupMutation = useMutation({
    mutationFn: (payload: SignupPayload) => AuthService.signup(payload),
  });

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => AuthService.login(payload),
  });


  const logoutMutation = useMutation({
    mutationFn: () => AuthService.logout(),
  });

  return {
    signupMutation,
    loginMutation,
    logoutMutation,
  };
};
