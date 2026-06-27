import { supabase } from "@/lib/supabase";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/ui/AddToCartButton";

export default async function ProductPage({
  params
}: {
  params: { id: string };
}) {
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-400">
        Produit introuvable
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-card p-6 rounded-xl border border-white/10">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-400 mt-2">
          {product.description}
        </p>

        <p className="text-primary text-2xl font-bold mt-4">
          {formatPrice(product.price)}
        </p>

        <div className="mt-6">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
