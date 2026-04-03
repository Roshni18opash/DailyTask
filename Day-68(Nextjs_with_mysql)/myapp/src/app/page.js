"use client"; // For Next.js app directory

import Link from "next/link";

export default function HomePage() {
  const articles = [
    {
      id: 1,
      title: "AI Trends 2026",
      description: "Explore the latest trends in AI and machine learning.",
      link: "#",
    },
    {
      id: 2,
      title: "Next.js Tips",
      description: "Boost your Next.js skills with these expert tips.",
      link: "#",
    },
    {
      id: 3,
      title: "Tailwind CSS Tricks",
      description: "Learn advanced styling techniques with Tailwind CSS.",
      link: "#",
    },
    {
      id: 4,
      title: "Web3 & Blockchain",
      description:
        "Discover how Web3 and blockchain are reshaping the internet.",
      link: "#",
    },
    {
      id: 5,
      title: "React 18 Features",
      description: "Learn about the new features and improvements in React 18.",
      link: "#",
    },
    {
      id: 6,
      title: "Cybersecurity Tips",
      description:
        "Essential cybersecurity practices every developer should know.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with green-teal gradient */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Tech World
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your daily dose of tech news, tutorials, and insights.
        </p>
        <Link
          href="/register"
          className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </header>

      {/* Articles Section */}
      <main className="flex-1 bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <Link
                href={article.link}
                className="text-green-600 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
