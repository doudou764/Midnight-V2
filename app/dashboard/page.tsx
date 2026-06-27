"use client";

import { useUser } from "@/lib/useUser";

export default function Dashboard() {
  const user = useUser();

  if (!user) {
    return (
      <div className="p-10 text-center text-gray-400">
        Tu dois être connecté
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Dashboard
      </h1>

      <div className="bg-card p-6 rounded-xl">
        <p>Email : {user.email}</p>

        <p className="text-gray-400 mt-2">
          Ici tu verras :
        </p>

        <ul className="text-gray-400 mt-2 list-disc pl-6">
          <li>Historique des commandes</li>
          <li>Téléchargements</li>
          <li>Abonnements</li>
        </ul>
      </div>
    </div>
  );
}
