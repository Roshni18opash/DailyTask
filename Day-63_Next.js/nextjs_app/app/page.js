import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Opash Software
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Build modern web applications with Next.js, Tailwind CSS, and powerful
          backend integrations.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/services"
            className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 text-blue-600 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">
              Optimized Next.js apps with lightning-fast loading speed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Modern UI</h3>
            <p className="text-gray-600">
              Clean and responsive design using Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Scalable Backend</h3>
            <p className="text-gray-600">
              Easily connect APIs, databases, and server components.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 text-blue-600">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Latest Posts
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                Sample Post Title {item}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                This is a preview of your post content. You can connect this
                with your server component.
              </p>

              <Link
                href="/servercomp"
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="mb-6">Start your journey with us today.</p>

        <Link
          href="/contact"
          className="bg-white text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© 2026 Opash Software. All rights reserved.</p>
      </footer>
    </main>
  );
}
