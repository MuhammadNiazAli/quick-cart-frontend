"use client";
import Image from "next/image";
import React from "react";

const orders = [
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
    <div className="bg-white rounded-lg border-t border-b border-r-0 border-l-0 mt-5">
      {orders.map((order) => (
        <div
          key={order.id}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 border-b last:border-none items-center"
        >
          <div className="flex justify-center md:justify-start">
            <div className="w-14 h-14 bg-pink-50/10 rounded-lg flex items-center justify-center">
              <Image
                src="/assets/box_icon.svg"
                alt="Order Icon"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm font-medium text-gray-800">
              {order.products}
            </p>
            <p className="text-sm text-gray-500 mt-2">Items : {order.items}</p>
          </div>

          <div>
            <p className="text-sm text-gray-800">{order.name}</p>
            <p className="text-sm text-gray-500">{order.address}</p>
            <p className="text-sm text-gray-500">{order.city}</p>
            <p className="text-sm text-gray-500">{order.phone}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800">{order.total}</p>
          </div>

          <div>
            <p className="text-sm text-gray-700">Method : {order.method}</p>
            <p className="text-sm text-gray-500">Date : {order.date}</p>
            <p className="text-sm text-gray-500">Payment : {order.payment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
