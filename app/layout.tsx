import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Midnight Store",
  description: "Plateforme de produits numériques premium"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen bg-background text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
