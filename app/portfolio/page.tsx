import React from "react";
import Link from "next/link"; // or 'react-router-dom' if using that

const projects = [
  {
    title: "Decentralized Exchange",
    description: "A decentralized exchange platform for trading cryptocurrencies.",
    techStack: ["React", "Node.js", "PostgreSQL", "Solidity", "Ethereum", "Web3.js"],
  },
  {
    title: "Beta CRM",
    description: "A customer relationship management tool for small businesses.",
    techStack: ["Angular", "Firebase", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Eduacational video streaming plateform",
    description: "An application for streaming educational videos with user authentication.",
    techStack: ["Express", "MongoDB", "Docker", "Redis","kafka"],
  },
  {
    title: "Online food delivery",
    description: "A scalable web app for food delivery with robust system.",
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Management system",
    description: "A customer relationship management tool for small businesses.",
    techStack: ["Angular", "Firebase", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "CrossChain API",
    description: "Robust RESTful API for financial data processing.",
    techStack: ["Express", "MongoDB", "Docker", "Rust", "Redis","python"],
  },
  {
    title: "Web app",
    description: "A scalable web app for task management with real-time collaboration.",
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Redis"],
  },
  {
    title: "Godown CRM",
    description: "A customer relationship management tool for businesses and their goods of their stocks.",
    techStack: ["Angular", "Firebase", "TypeScript"],
  },
  {
    title: "Crypto API",
    description: "Robust RESTful API for Decentrilize financial data processing.",
    techStack: ["Express", "MongoDB", "Docker", "Redis", "kafka"],
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-2xl font-bold text-white">
                SR DIGITAL
              </Link>
              <nav className="hidden md:flex items-center mx-80 space-x-8">
                <Link href="/" className="text-white hover:text-orange-500 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-white hover:text-orange-500 transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-white hover:text-orange-500 transition-colors">
                  Portfolio
                </Link>
                <Link href="/about" className="text-white hover:text-orange-500 transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-orange-500 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg text-gray-300">
              Explore some of the projects we've crafted with passion and precision.
            </p>
          </div>

          <section className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-zinc-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div>
                  <span className="text-sm font-medium text-gray-400">Tech Stack:</span>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="bg-gray-700 text-sm px-2 py-1 rounded-full text-white"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-500">&copy; {new Date().getFullYear()} SR DIGITAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
