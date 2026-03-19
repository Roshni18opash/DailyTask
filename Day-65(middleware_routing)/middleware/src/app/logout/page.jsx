"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Call logout API to delete token
    fetch("/api/logout").then(() => {
      router.push("/login"); // redirect after logout
    });
  }, [router]);

  return <p>Logging out...</p>;
}
