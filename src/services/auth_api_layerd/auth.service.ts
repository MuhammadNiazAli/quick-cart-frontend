import { apiFetch } from "../base_api_client/apiClient";

export interface AuthResponse {
  role: "admin" | "user";
  message?: string;
}

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const AuthService = {
  signup(payload: SignupPayload) {
    return apiFetch<AuthResponse>("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  login(payload: LoginPayload) {
    return apiFetch<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },


  logout() {
    return apiFetch<{ message: string }>("/api/auth/logout", {
      method: "POST",
    });
  },
};
