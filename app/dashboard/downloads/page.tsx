"use client";

import { useUser } from "@/lib/useUser";

export default function DownloadsPage() {
  const user = useUser();

  if (!user) {
    return (
      <div className="p-10 text-center text-gray-400">
        Connecte-toi
      </div>
    );
  }

  // simulation produits achetés
  const downloads = [
    {
      name: "Cyberpunk 2077 Key",
      link: "#"
    },
    {
      name: "Netflix Premium Account",
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Mes produits
      </h1>

      <div className="space-y-4">
        {downloads.map((d, i) => (
          <div
            key={i}
            className="bg-card p-4 rounded-xl border border-white/10 flex justify-between"
          >
            <p>{d.name}</p>

            <a
              href={d.link}
              className="text-primary"
            >
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
