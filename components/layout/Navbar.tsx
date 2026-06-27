import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 text-sm text-gray-300">
      <Link href="/">Accueil</Link>
      <Link href="/products">Produits</Link>
      <Link href="/cart">Panier</Link>
      <Link href="/dashboard">Compte</Link>
    </nav>
  );
}
