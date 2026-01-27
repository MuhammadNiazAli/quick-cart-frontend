import { apiFetch } from "./base_api_client/apiClient";

export type Category =
  | "Earphone"
  | "Watch"
  | "Headphone"
  | "Laptop"
  | "Camera"
  | "Smartphone"
  | "Accessories";

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  image: string; 
  offer?: number;
  createdAt?: string;
  updatedAt?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";


const normalizeImageUrl = (img: string) => {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `${API_URL}${img}`;
};


export const getAllProducts = async (): Promise<Product[]> => {
  const data = await apiFetch<Product[]>("/api/product/allproducts");
  return data.map((p) => ({ ...p, image: normalizeImageUrl(p.image) }));
};


export const getSingleProduct = async (id: string): Promise<Product> => {
  const p = await apiFetch<Product>(`/api/product/product/${id}`);
  return { ...p, image: normalizeImageUrl(p.image) };
};


export const createProduct = async (formData: FormData): Promise<Product> => {
  // optional guard: ensure image exists
  const hasImage = formData.get("image");
  if (!hasImage) throw new Error("Image is required");

  const p = await apiFetch<Product>("/api/product/createproduct", {
    method: "POST",
    body: formData,
  });

  return { ...p, image: normalizeImageUrl(p.image) };
};
