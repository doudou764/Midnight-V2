"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const ordersRes = await supabase.from("orders").select("*");
      const productsRes = await supabase.from("products").select("*");

      setOrders(ordersRes.data || []);
      setProducts(productsRes.data || []);
    };

    fetchData();
  }, []);

  const totalRevenue = orders.reduce(
    (sum, o) => sum + o.total,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Admin
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400">Commandes</p>
          <p className="text-2xl font-bold">{orders.length}</p>
        </div>

        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400">Produits</p>
          <p className="text-2xl font-bold">{products.length}</p>
        </div>

        <div className="bg-card p-4 rounded-xl">
          <p className="text-gray-400">Revenus</p>
          <p className="text-2xl font-bold">
            €{totalRevenue.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
