// For Next.js app directory
async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
export default async function AboutPage() {
  await takeTime();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Tech World
        </h1>
        <p className="text-lg md:text-xl">
          Learn more about our mission, values, and what we do.
        </p>
      </header>

      {/* Content Section */}
      <main className="flex-1 bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Our Mission */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Our Mission
            </h2>
            <p className="text-gray-700">
              At Tech World, our mission is to empower developers and tech
              enthusiasts with the latest knowledge, tutorials, and resources in
              the world of technology. We aim to make learning tech accessible
              and enjoyable for everyone.
            </p>
          </section>

          {/* Our Values */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Innovation – We stay ahead with cutting-edge technologies.
              </li>
              <li>Community – Sharing knowledge and supporting developers.</li>
              <li>Quality – Delivering accurate and practical content.</li>
              <li>Accessibility – Making tech learning easy for everyone.</li>
            </ul>
          </section>

          {/* Meet the Team */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Meet the Team
            </h2>
            <p className="text-gray-700">
              Our team consists of experienced developers, designers, and
              content creators passionate about technology and education.
              Together, we build resources that help you grow and succeed in
              your tech journey.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
