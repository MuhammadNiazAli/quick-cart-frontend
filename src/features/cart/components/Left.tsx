"use client";

import Image from "next/image";
import React, { useState } from "react";

type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  qty: number;
};

type Props = {
  items: CartItem[];
  onRemove?: (id: string) => void;
  onQtyChange?: (id: string, qty: number) => void;
};

const money = (n: number) => `$${n.toFixed(2)}`;

export default function CartTableLeft({ items, onRemove, onQtyChange }: Props) {
  const [cartItems, setCartItems] = useState(items);

  const handleQtyChange = (id: string, qty: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, qty } : item
    );
    setCartItems(updatedItems);
  };

  const totalItems = cartItems.reduce((a, b) => a + b.qty, 0);

  return (
    <div className="bg-white border rounded-lg">
      <div className="flex items-center justify-between px-6 py-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
        <p className="text-sm text-gray-500">{totalItems} Items</p>
      </div>

      <div className="px-6 py-6">
        <table className="w-full border-separate border-spacing-y-6">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="font-medium">Product Details</th>
              <th className="font-medium w-28">Price</th>
              <th className="font-medium w-44">Quantity</th>
              <th className="font-medium w-32 text-right">Subtotal</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => {
              const subtotal = item.price * item.qty;

              return (
                <tr key={item.id} className="align-middle">
               
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {item.title}
                        </p>

                        <button
                          type="button"
                          className="text-xs text-orange-500 hover:underline mt-1 cursor-pointer"
                          onClick={() => onRemove?.(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="text-sm text-gray-700">{money(item.price)}</td>

                  {/* Quantity */}
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="w-9 h-9 border rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer"
                        onClick={() =>
                          handleQtyChange(item.id, Math.max(1, item.qty - 1))
                        }
                      >
                        ‹
                      </button>

                      <div className="w-10 h-9 border rounded-md flex items-center justify-center text-sm text-gray-700">
                        {item.qty}
                      </div>

                      <button
                        type="button"
                        className="w-9 h-9 border rounded-md text-gray-700 hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleQtyChange(item.id, item.qty + 1)}
                      >
                        ›
                      </button>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td className="text-right text-sm text-gray-700">
                    {money(subtotal)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button
          type="button"
          className="text-orange-500 text-sm mt-2 hover:underline"
        >
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
}
