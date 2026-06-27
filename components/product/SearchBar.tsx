"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch
}: {
  onSearch: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      placeholder="Rechercher un produit..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
      }}
      className="w-full px-4 py-2 rounded-xl bg-black border border-white/10 text-white"
    />
  );
}
