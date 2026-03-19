import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Auth App</title>
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/register">Register</Link> |{" "}
          <Link href="/login">Login</Link> |{" "}
          <Link href="/dashboard">Dashboard</Link> |{" "}
          <Link href="/logout">Logout</Link>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
