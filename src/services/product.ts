import api from "@/lib/axios";
import { off } from "process";
import toast from "react-hot-toast";

export const CreateProduct = async (formData: {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  offer?: number;
}) => {
    try {
        const res = await api.post("/product/createproduct", formData);
        return res.data;
    } catch (error) {
        toast.error("Failed to create product");
    }
};
export const GetAllProducts=async()=>{
    try {
         const res = await api.get("/product/allproducts");
         return res.data
    } catch (error) {
        
    }
}