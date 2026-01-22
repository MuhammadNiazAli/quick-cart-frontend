import api from "@/lib/axios";

export const getProfile = async () => {
  const res = await api.get("/user/profile");
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const res = await api.post("/auth/signup", { name, email, password });
  return res.data;
};

export const logoutUser = async () => {
  return Promise.resolve();
};
