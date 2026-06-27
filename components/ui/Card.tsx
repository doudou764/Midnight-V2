import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-card border border-white/10 rounded-xl p-4 hover:scale-[1.02] transition">
      {children}
    </div>
  );
}
