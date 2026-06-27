"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    await supabase.from("products").insert({
      name,
      price
    });

    setName("");
    setPrice(0);
    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    await supabase.from("products").delete().eq("id", id);
    fetchProducts();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Produits</h1>

      <div className="flex gap-2 mb-6">
        <input
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 bg-black border border-white/10"
        />

        <input
          placeholder="Prix"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="p-2 bg-black border border-white/10"
        />

        <button
          onClick={addProduct}
          className="bg-primary px-4 py-2 rounded-xl"
        >
          Ajouter
        </button>
      </div>

      <div className="space-y-2">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-card p-3 flex justify-between"
          >
            <p>{p.name}</p>

            <button
              onClick={() => deleteProduct(p.id)}
              className="text-red-400"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
