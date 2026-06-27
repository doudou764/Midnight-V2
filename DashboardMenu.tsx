import Link from "next/link";

export default function DashboardMenu() {
  return (
    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
      <Link href="/dashboard">Profil</Link>
      <Link href="/dashboard/orders">Commandes</Link>
      <Link href="/dashboard/downloads">Téléchargements</Link>
      <Link href="/dashboard/invoice">Factures</Link>
    </div>
  );
}
