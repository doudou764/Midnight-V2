"use client";

import { useUser } from "./useUser";

export function useAdmin() {
  const user = useUser();

  // simple check (tu pourras remplacer par role DB plus tard)
  const isAdmin = user?.email === "admin@midnight.com";

  return { user, isAdmin };
}
