import Navigation from "@/components/Navigation";
// import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={roboto.className}>
          {/* writing here will appears on evrypage */}
          <Navigation />
          {children}
        </body>
      </html>
    </>
  );
}
