import { apiFetch } from "../base_api_client/apiClient";

export interface UserProfileData {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export const UserService = {
  getProfile() {
    return apiFetch<UserProfileData>("/api/user/profile", {
      method: "GET",
    });
  },

  updateProfile(formData: FormData) {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
      {
        method: "PUT",
        body: formData,
        credentials: "include",
      }
    ).then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to update profile");
      }
      return data as UserProfileData;
    });
  },
};
