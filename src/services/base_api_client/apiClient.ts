const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {

  const isFormData = options?.body instanceof FormData;

  const res = await fetch(`${API_BASE_URL}${url}`, {
    ...(options || {}),
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(options?.headers || {}),
    },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "API Error");
  }

  return data;
}

