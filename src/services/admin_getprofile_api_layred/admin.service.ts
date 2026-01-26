import { apiFetch } from "../base_api_client/apiClient";

export interface AdminProfileResponse {
  name: string;
  email: string;
  role: string;
  contact?: string;
  avatar?: string;
}

interface UpdateAdminPayload {
  name: string;
  contact: string;
  password?: string;
  avatar: string;
}

export const AdminService = {
  getProfile() {
    return apiFetch<AdminProfileResponse>("/api/admin/me", {
      method: "GET",
    });
  },

  updateProfile(payload: UpdateAdminPayload) {
    return apiFetch<{ data: AdminProfileResponse }>("/api/admin/me", {
      method: "PUT",
      body: JSON.stringify(payload),
    });
  },
};
