import bose_head from './bose_headphone_image.png'
import macbook_image from './asus_laptop_image.png'
import samsung_s23phone_image from './samsung_s23phone_image.png'
import playstation_image from './playstation_image.png'
import header_macbook_image from './header_macbook_image.png'
import venu_watch_image from './venu_watch_image.png'
import cannon_camera_image from './cannon_camera_image.png'
import bose_happle_earphone_imageead from './apple_earphone_image.png'
import sony_airbuds_image from './sony_airbuds_image.png'
import bose_hprojector_imageead from './projector_image.png'
import { b } from 'motion/react-client'
import { StaticImageData } from 'next/image'

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: StaticImageData;
}
export const products: Product[] = [
  {
    id: 1,
    title: "Bose QuietComfort 45",
    description: "The Bose QuietComfort 45 headphones",
    price: 329.99,
    rating: 4.5,
    image: bose_head,
  },
  {
    id: 2,
    title: "ASUS ROG Zephyrus G16",
    description: "The ASUS ROG Zephyrus G16 gaming laptop",
    price: 1999.99,
    rating: 4.5,
    image: macbook_image,
  },
  {
    id: 3,
    title: "Samsung Galaxy S23",
    description: "The Samsung Galaxy S23 offers an amazing experience",
    price: 799.99,
    rating: 4.5,
    image: samsung_s23phone_image,
  },
  {
    id: 4,
    title: "PlayStation 5",
    description: "The PlayStation 5 takes gaming to the next level",
    price: 499.99,
    rating: 4.5,
    image: playstation_image,
  },
  {
    id: 5,
    title: "MacBook Pro 16",
    description: "The MacBook Pro 16 powered by Apple Silicon",
    price: 2499.99,
    rating: 4.5,
    image: header_macbook_image,
  },
  {
    id: 6,
    title: "Garmin Venu 2",
    description: "The Garmin Venu 2 smartwatch",
    price: 349.99,
    rating: 4.5,
    image: venu_watch_image,
  },
  {
    id: 7,
    title: "Canon EOS R5",
    description: "The Canon EOS R5 is a game-changer camera",
    price: 3899.99,
    rating: 4.5,
    image: cannon_camera_image,
  },
  {
    id: 8,
    title: "Apple AirPods Pro 2nd Gen",
    description: "AirPods Pro (2nd Gen) with active noise cancellation",
    price: 399.99,
    rating: 4.5,
    image: bose_happle_earphone_imageead,
  },
  {
    id: 9,
    title: "Sony WF-1000XM5",
    description: "Sony WF-1000XM5 true wireless earbuds",
    price: 299.99,
    rating: 4.5,
    image: sony_airbuds_image,
  },
  {
    id: 10,
    title: "Samsung Projector 4K",
    description: "The Samsung 4K Projector for home cinema",
    price: 1499.99,
    rating: 4.5,
    image: bose_hprojector_imageead,
  },
];
export const featuredProductIds: Product[] = [
  {
    id: 1,
    title: "Bose QuietComfort 45",
    description: "The Bose QuietComfort 45 headphones",
    price: 329.99,
    rating: 4.5,
    image: bose_head,
  },
  {
    id: 2,
    title: "ASUS ROG Zephyrus G16",
    description: "The ASUS ROG Zephyrus G16 gaming laptop",
    price: 1999.99,
    rating: 4.5,
    image: macbook_image,
  },
  {
    id: 3,
    title: "Samsung Galaxy S23",
    description: "The Samsung Galaxy S23 offers an amazing experience",
    price: 799.99,
    rating: 4.5,
    image: samsung_s23phone_image,
  },
  {
    id: 4,
    title: "PlayStation 5",
    description: "The PlayStation 5 takes gaming to the next level",
    price: 499.99,
    rating: 4.5,
    image: playstation_image,
  },
  {
    id: 5,
    title: "MacBook Pro 16",
    description: "The MacBook Pro 16 powered by Apple Silicon",
    price: 2499.99,
    rating: 4.5,
    image: header_macbook_image,
  }
];
