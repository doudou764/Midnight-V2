"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useUser } from "@/lib/useUser";
import { formatPrice } from "@/lib/utils";

export default function OrdersPage() {
  const user = useUser();
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      const { data } = await supabase
        .from("orders")
        .select("*")
        .eq("user_email", user.email);

      setOrders(data || []);
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="p-10 text-center text-gray-400">
        Connecte-toi
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Mes commandes
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-card p-4 rounded-xl border border-white/10"
          >
            <p className="text-primary font-bold">
              {formatPrice(order.total)}
            </p>

            <p className="text-gray-400 text-sm">
              {new Date(order.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
