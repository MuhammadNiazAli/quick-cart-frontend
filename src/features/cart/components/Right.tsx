"use client";

import React, { useMemo, useState } from "react";

type CartItem = {
  id: string;
  price: number;
  qty: number;
};

type Props = {
  items: CartItem[];
  taxPercent?: number; // default 2
  shippingFee?: number; // default 0
  onPlaceOrder?: () => void;
  onSelectAddress?: () => void;
  onApplyPromo?: (code: string) => void;
};

const money = (n: number) => `$${n.toFixed(2)}`;

export default function Right({
  items,
  taxPercent = 2,
  shippingFee = 0,
  onPlaceOrder,
  onSelectAddress,
  onApplyPromo,
}: Props) {
  const [promo, setPromo] = useState("");

  const price = useMemo(() => {
    return items.reduce((sum, it) => sum + it.price * it.qty, 0);
  }, [items]);

  const tax = useMemo(() => (price * taxPercent) / 100, [price, taxPercent]);
  const total = useMemo(() => price + shippingFee + tax, [price, shippingFee, tax]);

  return (
    <div className="border rounded-lg bg-white p-6 sticky top-6">
      <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>

      <hr className="my-4" />

      {/* Select Address */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 mb-2">SELECT ADDRESS</p>
        <button
          type="button"
          onClick={onSelectAddress}
          className="w-full border rounded-md px-4 py-3 flex items-center justify-between text-sm text-gray-700 hover:bg-gray-50"
        >
          <span>Select Address</span>
          <span className="text-gray-400">›</span>
        </button>
      </div>

      {/* Promo Code */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 mb-2">PROMO CODE</p>

        <input
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          placeholder="Enter promo code"
          className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200"
        />

        <button
          type="button"
          onClick={() => onApplyPromo?.(promo)}
          className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2.5 text-sm font-medium"
        >
          Apply
        </button>
      </div>

      <hr className="my-4" />

      {/* Breakdown */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Price</span>
          <span>{money(price)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span className={shippingFee === 0 ? "text-green-600" : ""}>
            {shippingFee === 0 ? "Free" : money(shippingFee)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Tax ({taxPercent}%)</span>
          <span>{money(tax)}</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-gray-800">Total</span>
        <span className="text-lg font-semibold text-gray-800">{money(total)}</span>
      </div>

      <button
        type="button"
        onClick={onPlaceOrder}
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-3 text-sm font-semibold"
      >
        Place Order
      </button>
    </div>
  );
}
