'use client';

import { useCart } from "@/context/CartContext/CartContext"; 
import Right from "./components/Right";
import CartTableLeft from "./components/Left";

export default function CartPage() {
  // ✅ Extracting functions from context to actually update the state
  const { cart, removeFromCart, updateQuantity } = useCart(); 

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CartTableLeft
            items={cart} 
            // ✅ Logic connected here
            onRemove={(id) => removeFromCart(id)} 
            onQtyChange={(id, qty) => updateQuantity(id, qty)} 
          />
        </div>

        <div className="lg:col-span-1">
          <Right
            items={cart} 
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