"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("token", "12345");
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
