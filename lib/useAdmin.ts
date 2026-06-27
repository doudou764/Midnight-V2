"use client";

import { useUser } from "./useUser";

export function useAdmin() {
  const user = useUser();

  const isAdmin = user?.user_metadata?.role === "admin";

  return { user, isAdmin };
}
