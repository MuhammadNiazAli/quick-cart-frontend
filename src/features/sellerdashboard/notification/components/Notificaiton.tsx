"use client";
import React, { useState } from "react";

type Notification = {
  id: number;
  type: "membership" | "order" | "product";
  message: string;
  date: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "membership",
    message: "John Doe has requested membership.",
    date: "21/01/2026",
    read: false,
  },
  {
    id: 2,
    type: "order",
    message: "New order #1024 has been placed.",
    date: "21/01/2026",
    read: false,
  },
  {
    id: 3,
    type: "product",
    message: "Samsung Galaxy S23 stock is low.",
    date: "20/01/2026",
    read: true,
  },
  {
    id: 4,
    type: "order",
    message: "Order #1023 has been shipped.",
    date: "19/01/2026",
    read: true,
  },
];

const NotificationPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="bg-white -ml-50 lg:ml-0 rounded-lg p-6 mt-5">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>

      {notifications.length === 0 && (
        <div className="text-gray-500 text-center py-10">
          No notifications at the moment.
        </div>
      )}

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 ${
              n.read ? "bg-gray-50" : "bg-white"
            }`}
          >
          
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  n.type === "membership"
                    ? "bg-orange-100 text-orange-700"
                    : n.type === "order"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {n.type === "membership"
                  ? "Membership"
                  : n.type === "order"
                  ? "Order"
                  : "Product"}
              </span>
              <span className={`text-sm ${n.read ? "text-gray-500" : "text-gray-900"}`}>
                {n.message}
              </span>
            </div>

           
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <span className="text-xs text-gray-400">{n.date}</span>
              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  Read
                </button>
              )}
              <button
                onClick={() => deleteNotification(n.id)}
                className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-500 transition-colors cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
