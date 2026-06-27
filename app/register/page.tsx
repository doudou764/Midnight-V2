"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) alert(error.message);
    else alert("Compte créé !");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-card p-6 rounded-xl w-96">
        <h1 className="text-xl font-bold mb-4">Inscription</h1>

        <input
          className="w-full p-2 mb-2 bg-black border border-white/10"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 bg-black border border-white/10"
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-primary py-2 rounded-xl"
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
}
