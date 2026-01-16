import SingleProduct from "@/features/single product/SingleProduct";
import { products } from "../../../../public/assets/cartdata";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params; // ✅ CORRECT
  const product=products.find(item=>item.id===Number(id));
  if(!product){
    return <div className="max-w-7xl mx-auto px-6 py-14">Product not found</div>
  }
  

  return (
    <SingleProduct product={product} id={Number(id)} />
  );
};

export default Page;
