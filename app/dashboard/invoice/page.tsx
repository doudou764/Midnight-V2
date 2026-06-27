"use client";

import { useUser } from "@/lib/useUser";

export default function InvoicePage() {
  const user = useUser();

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Facture
      </h1>

      <div className="bg-card p-6 rounded-xl border border-white/10">
        <p>Email : {user.email}</p>

        <p className="text-gray-400 mt-4">
          Factures générées automatiquement après paiement Stripe.
        </p>
      </div>
    </div>
  );
}
