"use client";

import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const res = await fetch("/api/stripe", {
      method: "POST",
      body: JSON.stringify({ items })
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Paiement</h1>

      <div className="bg-card p-6 rounded-xl border border-white/10">
        <p className="text-gray-400 mb-4">
          Total à payer :{" "}
          <span className="text-primary font-bold">
            {formatPrice(total)}
          </span>
        </p>

        <button
          onClick={handleCheckout}
          className="w-full bg-primary py-3 rounded-xl"
        >
          Payer avec Stripe
        </button>
      </div>
    </div>
  );
}
