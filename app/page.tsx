export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-5xl font-bold text-white mb-4">
        MIDNIGHT STORE
      </h1>

      <p className="text-gray-300 text-lg max-w-xl">
        La plateforme premium de produits numériques :
        jeux, abonnements, cartes cadeaux et logiciels.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/products"
          className="px-6 py-3 bg-primary rounded-xl hover:opacity-80 transition"
        >
          Explorer
        </a>

        <a
          href="/shop"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Boutique
        </a>
      </div>
    </div>
  );
}
