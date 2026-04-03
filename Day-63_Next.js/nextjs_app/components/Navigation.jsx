import Link from "next/link";

export default function Navigation() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          Opash Software
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/clientcomp"
                className="hover:text-blue-600 transition"
              >
                Client
              </Link>
            </li>
            <li>
              <Link
                href="/servercomp"
                className="hover:text-blue-600 transition"
              >
                Server
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
