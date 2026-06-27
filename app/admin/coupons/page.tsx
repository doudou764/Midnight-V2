"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const fetchCoupons = async () => {
    const { data } = await supabase.from("coupons").select("*");
    setCoupons(data || []);
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const addCoupon = async () => {
    await supabase.from("coupons").insert({
      code,
      discount
    });

    setCode("");
    setDiscount(0);
    fetchCoupons();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Coupons</h1>

      <div className="flex gap-2 mb-6">
        <input
          placeholder="CODE"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="p-2 bg-black border border-white/10"
        />

        <input
          type="number"
          placeholder="%"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="p-2 bg-black border border-white/10"
        />

        <button
          onClick={addCoupon}
          className="bg-primary px-4 py-2 rounded-xl"
        >
          Ajouter
        </button>
      </div>

      <div className="space-y-2">
        {coupons.map((c) => (
          <div
            key={c.id}
            className="bg-card p-3 flex justify-between"
          >
            <p>{c.code} - {c.discount}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
