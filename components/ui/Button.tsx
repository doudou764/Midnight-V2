import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="px-4 py-2 bg-primary rounded-xl hover:opacity-80 transition">
      {children}
    </button>
  );
}
