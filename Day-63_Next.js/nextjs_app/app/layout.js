import Navigation from "../components/Navigation";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* writing here will appears on evrypage */}
        {children}
      </body>
    </html>
  );
}
