import { useCart } from "@/lib/cart-store";

export default function AddToCartButton({
  product
}: {
  product: any;
}) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        })
      }
      className="w-full bg-primary py-2 rounded-xl hover:opacity-80 transition"
    >
      Ajouter au panier
    </button>
  );
}
