"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function StatsPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("orders").select("*");
      setOrders(data || []);
    };

    fetch();
  }, []);

  const data = {
    labels: orders.map((_, i) => `#${i + 1}`),
    datasets: [
      {
        label: "Ventes (€)",
        data: orders.map((o) => o.total),
        backgroundColor: "#7C3AED"
      }
    ]
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Statistiques
      </h1>

      <div className="bg-card p-4 rounded-xl">
        <Bar data={data} />
      </div>
    </div>
  );
}
