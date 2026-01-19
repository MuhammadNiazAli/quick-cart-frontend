"use client";

import Image from "next/image";
import React from "react";

type Order = {
  id: number;
  products: string;
  items: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  total: string;
  method: string;
  date: string;
  payment: string;
};

const orders: Order[] = [
  {
    id: 1,
    products: "Samsung Galaxy S23 x 1, ASUS ROG Zephyrus G16 x 1",
    items: 2,
    name: "asdf",
    address: "asdfasdf",
    city: "asdf, asdf",
    phone: "9876543210",
    total: "$2854.98",
    method: "COD",
    date: "16/01/2026",
    payment: "Pending",
  },
  {
    id: 2,
    products: "ASUS ROG Zephyrus G16 x 1",
    items: 1,
    name: "sudheeshk",
    address: "acubsdo",
    city: "abcid, sdjkbv",
    phone: "9876543210",
    total: "$2038.99",
    method: "COD",
    date: "16/01/2026",
    payment: "Pending",
  },
  {
    id: 3,
    products:
      "Samsung Galaxy S23 x 3, ASUS ROG Zephyrus G16 x 2, Apple AirPods Pro 2nd gen x 2",
    items: 3,
    name: "ameeee",
    address: "jghadsdsa",
    city: "ghads, asgd",
    phone: "9876543210",
    total: "$7342.93",
    method: "COD",
    date: "16/01/2026",
    payment: "Pending",
  },
  {
    id: 4,
    products: "Samsung Galaxy S23 x 9",
    items: 1,
    name: "ayas",
    address: "asdfasdf",
    city: "asfd, asdf",
    phone: "9876543210",
    total: "$7342.91",
    method: "COD",
    date: "15/01/2026",
    payment: "Pending",
  },
];

const Orders = () => {
  return (
    
    <div className="mt-5 rounded-lg bg-white -ml-50 lg:ml-0">
      <h1 className="font-medium text-lg text-gray-700 mb-5">orders</h1>
      <div className="divide-y divide-gray-200  border border-l-0 border-r-0 border-gray-200">
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-1 gap-4 p-4 sm:p-5 lg:grid-cols-12 lg:gap-6 lg:p-6"
          >
            <div className="flex items-start lg:col-span-1">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-pink-50 flex items-center justify-center">
                <Image
                  src="/assets/box_icon.svg"
                  alt="Order Icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <p className="text-sm font-medium text-gray-900 truncate sm:whitespace-normal sm:wrap-break-word">
                {order.products}
              </p>
              <p className="mt-1 text-sm text-gray-500">Items: {order.items}</p>
            </div>

            <div className="min-w-0 lg:col-span-3">
              <p className="text-sm font-medium text-gray-900 truncate">
                {order.name}
              </p>
              <p className="text-sm text-gray-500 truncate">{order.address}</p>
              <p className="text-sm text-gray-500 truncate">{order.city}</p>
              <p className="text-sm text-gray-500 truncate">{order.phone}</p>
            </div>

            <div className="lg:col-span-1 lg:text-right">
              <p className="text-sm font-semibold text-gray-900">
                {order.total}
              </p>
            </div>

            <div className="lg:col-span-2 lg:text-right">
              <p className="text-sm text-gray-700">
                <span className="text-gray-500">Method:</span> {order.method}
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-gray-400">Date:</span> {order.date}
              </p>
              <p className="text-sm text-gray-500">
                <span className="text-gray-400">Payment:</span> {order.payment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
