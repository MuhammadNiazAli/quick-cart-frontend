import React from "react";

type Order = {
  id: string;
  product: string;
  date: string;
  amount: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
};

const mockOrders: Order[] = [
  {
    id: "ORD-1001",
    product: "Wireless Headphones",
    date: "2026-01-12",
    amount: "$120.00",
    status: "Delivered",
  },
  {
    id: "ORD-1002",
    product: "Smartwatch Series 7",
    date: "2026-01-14",
    amount: "$250.00",
    status: "Shipped",
  },
  {
    id: "ORD-1003",
    product: "Gaming Laptop",
    date: "2026-01-15",
    amount: "$1,450.00",
    status: "Pending",
  },
  {
    id: "ORD-1004",
    product: "Bluetooth Speaker",
    date: "2026-01-16",
    amount: "$75.00",
    status: "Cancelled",
  },
];

const statusColors: Record<Order["status"], string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const Orders: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Recent Orders
          </h2>
          <p className="mt-3 text-gray-600">
            Track your latest purchases and see the order status at a glance.
          </p>
        </div>

        {/* Orders Table (desktop) */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-gray-700 font-medium">Order ID</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Product</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Date</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Amount</th>
                <th className="px-6 py-3 text-gray-700 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.product}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 text-gray-700">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-900">{order.product}</h4>
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm">Order ID: {order.id}</p>
              <p className="text-gray-500 text-sm">Date: {order.date}</p>
              <p className="text-gray-900 font-medium mt-2">Amount: {order.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
