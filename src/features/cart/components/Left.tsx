"use client";
import Image from "next/image";
import React from "react";

type Item = {
  _id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

type Props = {
  items: Item[];
  onRemove?: (id: string) => void;
  onQtyChange?: (id: string, qty: number) => void;
};

const money = (n: number) => `$${n.toFixed(2)}`;

export default function CartTableLeft({ items, onRemove, onQtyChange }: Props) {
  // Logic Fix: Items seedha props se use ho rahe hain
  const totalItems = items.reduce((a, b) => a + b.quantity, 0);

  return (
    <div className="bg-white border rounded-lg">
      <div className="flex items-center justify-between px-6 py-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
        <p className="text-sm text-gray-500">{totalItems} Items</p>
      </div>

      <div className="px-6 py-6 overflow-x-auto">
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
            {items.map((item) => {
              const subtotal = item.price * item.quantity;
              return (
                <tr key={item._id} className="align-middle">
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image src={item.image} alt={item.title} width={64} height={64} className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.title}</p>
                        <button onClick={() => onRemove?.(item._id)} className="text-xs text-orange-500 hover:underline mt-1 cursor-pointer">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-gray-700">{money(item.price)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button onClick={() => onQtyChange?.(item._id, Math.max(1, item.quantity - 1))} className="w-9 h-9 border rounded-md hover:bg-gray-50 cursor-pointer"> ‹ </button>
                      <div className="w-10 h-9 border rounded-md flex items-center justify-center text-sm">{item.quantity}</div>
                      <button onClick={() => onQtyChange?.(item._id, item.quantity + 1)} className="w-9 h-9 border rounded-md hover:bg-gray-50 cursor-pointer"> › </button>
                    </div>
                  </td>
                  <td className="text-right text-sm text-gray-700">{money(subtotal)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}