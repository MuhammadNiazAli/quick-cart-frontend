import { apiFetch } from "./base_api_client/apiClient";

export type Category =
  | "Earphone"
  | "Watch"
  | "Headphone"
  | "Laptop"
  | "Camera"
  | "Smartphone"
  | "Accessories";

export type Currency =
  | "PKR"
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "CNY"
  | "AED"
  | "SAR"
  | "INR"
  | "CAD";

export type Product = {
  _id: string;
  title: string;
  description: string;

  price: number;
  offer?: number;

  currency: Currency;
  currencySymbol: string;

  category: Category;
  image: string;

  createdAt?: string;
  updatedAt?: string;
};

// Featured GET response shape: [{ _id, productId: Product, createdAt, updatedAt }]
export type FeaturedDoc = {
  _id: string;
  productId: Product;
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
  const hasImage = formData.get("image");
  if (!hasImage) throw new Error("Image is required");

  const p = await apiFetch<Product>("/api/product/createproduct", {
    method: "POST",
    body: formData,
  });

  return { ...p, image: normalizeImageUrl(p.image) };
};

/**
 * ✅ GET FEATURED PRODUCTS
 * GET /api/product/featured
 * returns: FeaturedDoc[]
 */
export const getFeaturedProducts = async (): Promise<FeaturedDoc[]> => {
  const data = await apiFetch<FeaturedDoc[]>("/api/product/featured");

  // normalize nested product image
  return data.map((f) => ({
    ...f,
    productId: {
      ...f.productId,
      image: normalizeImageUrl(f.productId.image),
    },
  }));
};

/**
 * ✅ POST FEATURED (add existing product)
 * POST /api/product/featured
 * body: { productId: string }
 */
export const addFeaturedProduct = async (
  productId: string
): Promise<{ message: string; featured: FeaturedDoc }> => {
  if (!productId) throw new Error("productId is required");

  const res = await apiFetch<{ message: string; featured: FeaturedDoc }>(
    "/api/product/featured",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    }
  );

  // normalize nested image
  return {
    ...res,
    featured: {
      ...res.featured,
      productId: {
        ...res.featured.productId,
        image: normalizeImageUrl(res.featured.productId.image),
      },
    },
  };
};
