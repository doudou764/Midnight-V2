import Link from "next/link";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 bg-card p-4 border-r border-white/10">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <nav className="flex flex-col gap-3 text-sm">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/products">Produits</Link>
          <Link href="/admin/orders">Commandes</Link>
          <Link href="/admin/users">Utilisateurs</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
