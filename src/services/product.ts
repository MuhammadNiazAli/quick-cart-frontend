import { off } from "process";

export const CreateProduct = async (productData: {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  offer?: number;
}) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  return response.json();
};