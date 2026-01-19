'use client';
import Left from "./components/Left";
import Right from "./components/Right";

export default function CartPage() {
  const items = [
    {
      id: "1",
      title: "Samsung Galaxy S23",
      image: "/phone.png",
      price: 799.99,
      qty: 2,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <Left
            items={items}
            onRemove={(id) => console.log("remove", id)}
            onQtyChange={(id, qty) => console.log("qty", id, qty)}
          />
        </div>

        <div className="lg:col-span-1">
          <Right
            items={items}
            taxPercent={2}
            shippingFee={0}
            onSelectAddress={() => console.log("select address")}
            onApplyPromo={(code) => console.log("promo", code)}
            onPlaceOrder={() => console.log("place order")}
          />
        </div>
      </div>
    </div>
  );
}
