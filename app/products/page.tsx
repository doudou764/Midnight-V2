"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Card from "@/components/ui/Card";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/ui/AddToCartButton";
import SearchBar from "@/components/product/SearchBar";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase.from("products").select("*");
      setProducts(data || []);
      setFiltered(data || []);
    };

    fetchProducts();
  }, []);

  const handleSearch = (value: string) => {
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Boutique</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filtered.map((p) => (
          <Card key={p.id}>
            <h2 className="text-lg font-semibold">{p.name}</h2>

            <p className="text-gray-400 text-sm">{p.category}</p>

            <p className="mt-2 text-primary font-bold">
              {formatPrice(p.price)}
            </p>

            <div className="mt-4">
              <AddToCartButton product={p} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
