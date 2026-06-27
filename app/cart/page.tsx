export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Panier</h1>

      <div className="bg-card p-6 rounded-xl border border-white/10">
        <p className="text-gray-400">
          Ton panier sera connecté dans le module 2 (state global + Supabase).
        </p>
      </div>
    </div>
  );
}
