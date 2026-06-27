import Card from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";

const products = [
  {
    id: "1",
    name: "Netflix Premium",
    price: 12.99,
    category: "subscription"
  },
  {
    id: "2",
    name: "Steam Gift Card 20€",
    price: 20,
    category: "giftcard"
  },
  {
    id: "3",
    name: "Cyberpunk 2077",
    price: 29.99,
    category: "game"
  }
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Boutique</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <Card key={p.id}>
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-400">{p.category}</p>
            <p className="mt-2 text-primary font-bold">
              {formatPrice(p.price)}
            </p>

            <button className="mt-4 w-full bg-primary py-2 rounded-xl">
              Ajouter au panier
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
