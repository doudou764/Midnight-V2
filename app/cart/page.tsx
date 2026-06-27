"use client";

import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Panier</h1>

      {items.length === 0 ? (
        <p className="text-gray-400">Ton panier est vide.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card p-4 rounded-xl flex justify-between"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-400">
                    x{item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-primary font-bold">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 text-sm"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-xl font-bold">
              Total : {formatPrice(total)}
            </p>

            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-primary rounded-xl"
            >
              Vider le panier
            </button>
          </div>
        </>
      )}
    </div>
  );
}
