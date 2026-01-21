"use client";

import React, { useState } from "react";
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
 
  const [users] = useState<number>(1500);
  const [products] = useState<number>(320);
  const [orders] = useState<number>(580);
  const [salesData] = useState<{ labels: string[]; data: number[] }>({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    data: [5000, 7000, 6000, 8000, 9000],
  });
  const [buyData] = useState<{ labels: string[]; data: number[] }>({
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    data: [3000, 4000, 3500, 5000, 4500],
  });

  return (
    <div className="p-6 lg:p-10 bg-white min-h-screen lg:ml-0 -ml-50">
      <h1 className="lg:text-2xl font-bold text-gray-800 mb-8 text-[23px]">Analytics Dashboard</h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
       
        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 mb-1">Total Users</h2>
          <p className="text-2xl font-bold text-gray-900">{users}</p>
          <PiUsersThree className="text-orange-500 lg:w-20 lg:h-20 w-8 h-8 mt-2 lg:mt-7" />
        </div>

        
        <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-gray-500 mb-1">Products</h2>
          <p className="text-2xl font-bold text-gray-900">{products}</p>
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
                  data: [orders, 1000 - orders],
                  backgroundColor: ["#f97316", "#f3f4f6"],
                },
              ],
            }}
            options={{ plugins: { legend: { display: true, position: "bottom" } } }}
            className="w-28 h-28"
          />
        </div>
      </div>

   
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-gray-700 font-semibold mb-4">Sales vs Purchases</h2>
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
          options={{ responsive: true, plugins: { legend: { position: "top" } } }}
        />
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-gray-700 font-semibold mb-4">Orders Overview</h2>
        <Bar
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Orders",
                data: [50, 75, 150, 100, 200, 180],
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
