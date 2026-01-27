import { apiFetch } from "./base_api_client/apiClient";

/* =========================
   PRODUCT TYPE
========================= */
export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  offer?: number;
  __v?: number;
};

/* =========================
   GET ALL PRODUCTS
========================= */
export const getAllProducts = async (): Promise<Product[]> => {
  return apiFetch<Product[]>("/api/product/allproducts");
};

/* =========================
   GET SINGLE PRODUCT
========================= */
export const getSingleProduct = async (id: string): Promise<Product> => {
  return apiFetch<Product>(`/api/product/product/${id}`);
};

/* =========================
   CREATE PRODUCT (FormData)
========================= */
export const createProduct = async (
  formData: FormData
): Promise<Product> => {
  return apiFetch<Product>("/api/product/createproduct", {
    method: "POST",
    body: formData, // ✅ NO JSON.stringify
  });
};
