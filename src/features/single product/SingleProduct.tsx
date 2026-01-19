import { Button } from "@/components/ui/moving-border";
import { Buttonvtwo } from "@/components/ui/newversionbtn";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProductType = {
  id: number;
  product: {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    price: number;
  };
};

const SingleProduct = ({ product, id }: ProductType) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex justify-center gap-5">
          <div className="bg-gray-100 rounded-2xl p-6 sm:px-10 py-4 w-full max-w-md">
            <Image
              src={product.image}
              alt={product.title || "Product image"}
              width={400}
              height={400}
              className="object-contain mx-auto"
              priority
            />
            <div className="mt-5 flex justify-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border rounded-xl flex items-center justify-center">
                <Image
                  src={product.image}
                  alt="Product thumbnail"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-start md:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
            {product.title}
          </h1>
          <div className="flex justify-start items-center gap-2 mb-4 ">
            <div className="text-orange-500 text-lg">★★★★☆</div>
            <span className="text-sm text-gray-500">(4.5)</span>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-xl  lg:mx-0">
            {product.description} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Mollitia vero provident, architecto tempora
            repellat explicabo vel maiores distinctio fugit? Laborum nemo quasi
            architecto hic similique facere vero, quaerat cupiditate in?
          </p>
          <div className="flex justify-start items-center gap-4 mb-8">
            <span className="text-2xl font-medium text-gray-800">
              ${product.price}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ${Math.round(product.price * 1.25)}
            </span>
          </div>
          <hr className="mb-6 max-w-md mx-auto lg:mx-0" />
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <Buttonvtwo className="group flex items-center gap-3 text-[#374151] font-semibold cursor-pointer">
              Add to Cart
              <Image
                src="/assets/arrow_icon.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5 -ml-1"
              />
            </Buttonvtwo>
            <Link href={'/cart'} >
            <Button
              borderRadius="9999px"
              className="bg-orange-600 text-white text-[14px] font-semibold
                                     hover:bg-[#FF550E] hover:scale-101"
              containerClassName="h-11 w-[140px]"
              borderClassName="opacity-90"
            >
             Buy Now
            </Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
