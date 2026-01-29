"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";

import { useAnalytics } from "@/hooks/analytics/useAnalytics"; // Hook to fetch analytics data

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Analytics: React.FC = () => {
  const { data, isLoading, isError } = useAnalytics();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading analytics...
      </div>
    );
  }

  // Handle error state
  if (isError || !data) {
    return (
      <div className="p-10 text-center text-red-500">
        Failed to load analytics
      </div>
    );
  }

  // Destructure data from the API response
  const {
    users,
    products,  // Total number of products
    orders,
    salesData,
    buyData,
    ordersData,
  } = data;

  return (
    <div className="p-6 lg:p-10 bg-white min-h-screen lg:ml-0 -ml-50">
      <h1 className="lg:text-2xl font-bold text-gray-800 mb-8 text-[23px]">
        Analytics Dashboard
      </h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 mb-1">Total Users</h2>
          <p className="text-2xl font-bold text-gray-900">{users}</p>
          <PiUsersThree className="text-orange-500 lg:w-20 lg:h-20 w-8 h-8 mt-2 lg:mt-7" />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 mb-1">Products</h2>
          <p className="text-2xl font-bold text-gray-900">{products}</p> {/* Display product count */}
          <MdOutlineProductionQuantityLimits className="text-orange-500 lg:w-20 lg:h-20 w-8 h-8 mt-2 lg:mt-7" />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 mb-1">Orders</h2>
          <p className="text-2xl font-bold text-gray-900">{orders}</p>
          <BsBoxSeam className="text-orange-500 lg:w-20 lg:h-20 w-8 h-8 mt-2 lg:mt-7" />
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 mb-2">Progress</h2>
          <Doughnut
            data={{
              labels: ["Completed", "Remaining"],
              datasets: [
                {
                  data: [orders, Math.max(0, 1000 - orders)],
                  backgroundColor: ["#f97316", "#f3f4f6"],
                },
              ],
            }}
            options={{
              plugins: {
                legend: { display: true, position: "bottom" },
              },
            }}
            className="w-28 h-28"
          />
        </div>
      </div>

      {/* Sales vs Purchases */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-gray-700 font-semibold mb-4">
          Sales vs Purchases
        </h2>
        <Line
          data={{
            labels: salesData.labels,
            datasets: [
              {
                label: "Sales",
                data: salesData.data,
                borderColor: "#f97316",
                backgroundColor: "#f9731640",
                tension: 0.4,
              },
              {
                label: "Purchases",
                data: buyData.data,
                borderColor: "#3b82f6",
                backgroundColor: "#3b82f640",
                tension: 0.4,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { position: "top" } },
          }}
        />
      </div>

      {/* Orders Overview */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-gray-700 font-semibold mb-4">
          Orders Overview
        </h2>
        <Bar
          data={{
            labels: salesData.labels,
            datasets: [
              {
                label: "Orders",
                data: ordersData,
                backgroundColor: "#f97316",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;
