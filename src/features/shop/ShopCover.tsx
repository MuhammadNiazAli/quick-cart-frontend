import React from 'react'
import Card from './components/Shop'
import { div } from 'motion/react-client'
import { products } from '../../../public/assets/cartdata'
import Link from 'next/link'


const ShopCover = () => {
  return (
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

export default ShopCover