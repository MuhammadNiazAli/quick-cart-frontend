<<<<<<< HEAD
import React from "react";
import Card from "./components/Shop";
import { products } from "../../../public/assets/cartdata";
=======
import React from 'react'
import Card from './components/Shop'
import { div } from 'motion/react-client'
import { products } from '../../../public/assets/cartdata'
import Link from 'next/link'
>>>>>>> feature/shop

type ShopCoverProps = {
  showTitle?: boolean;
};

const ShopCover = ({ showTitle = true }: ShopCoverProps) => {
  return (
<<<<<<< HEAD
    <section className="w-full flex flex-col items-center justify-center mb-10">
      <div className="w-full max-w-290 px-7.5 mt-8">
        {showTitle && (
          <h1 className="text-[22px] font-medium text-gray-700">
            All pro
            <span className="border-b-2 border-orange-600">ducts</span>
          </h1>
        )}
=======
    <section className='w-full flex flex-col items-center justify-center'>
      <div className='w-full max-w-290 px-7.5 mt-8'>
        <h1 className="text-[22px] font-medium text-gray-700">All pr<span className='border-b-2 border-orange-600'>oducts</span></h1>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 mt-2'>
        {
          products.map(item=>(
              <Link href={`/shop/${item.id}`} key={item.id}>
                <Card key={item.id} image={item.image} title={item.title} description={item.description} price={item.price} rating={item.rating} />
              </Link>
          ))
        }
      </div>
    </div>
    </section>
  )
}
>>>>>>> feature/shop

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 mt-2">
          {products.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCover;
