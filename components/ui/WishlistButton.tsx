"use client";

import { useWishlist } from "@/lib/wishlist-store";

export default function WishlistButton({ product }: any) {
  const { items, toggle } = useWishlist();

  const liked = items.find((i) => i.id === product.id);

  return (
    <button
      onClick={() => toggle(product)}
      className="text-sm mt-2 text-gray-300 hover:text-pink-400"
    >
      {liked ? "❤️ Retirer" : "🤍 Ajouter aux favoris"}
    </button>
  );
}
