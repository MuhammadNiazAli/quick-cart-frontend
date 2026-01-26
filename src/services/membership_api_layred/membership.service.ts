import { apiFetch } from "../base_api_client/apiClient";

export type MemberRequest = {
  _id: string;
  user: {
    name: string;
    email: string;
  } | null;
  requestedRole: "viewer" | "partner";
  message: string;
  createdAt: string;
  status: "pending" | "accepted" | "rejected";
};

export type RecordItem = {
  _id: string;
  requestedRole: "viewer" | "partner";
  status: "pending" | "accepted" | "rejected";
  message: string;
  createdAt: string;
};

export const MembershipService = {
  getRequests(): Promise<MemberRequest[]> {
    return apiFetch<MemberRequest[]>("/api/membership", {
      method: "GET",
    });
  },

  updateStatus(
    id: string,
    status: "accepted" | "rejected",
  ): Promise<MemberRequest> {
    return apiFetch<MemberRequest>(`/api/membership/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  },

  informAdmin(payload: {
    role: "viewer" | "partner";
    message: string;
  }): Promise<{ message: string }> {
    return apiFetch<{ message: string }>("/api/membership/inform", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  getMyRecords(): Promise<RecordItem[]> {
    return apiFetch<RecordItem[]>("/api/membership/my-records", {
      method: "GET",
    });
  },
};
