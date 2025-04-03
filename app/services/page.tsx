"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: "Product Engineering",
      icon: "🧩",
      description:
        "We build scalable, robust products with cutting-edge technologies. Our engineering team delivers solutions that drive business growth and innovation.",
      features: ["Custom Software Development", "API Integration", "DevOps & Cloud Solutions", "Quality Assurance"],
    },
    {
      title: "UX/UI Design",
      icon: "🎨",
      description:
        "Create intuitive, engaging user experiences that delight your customers. Our design team focuses on usability, accessibility, and visual appeal.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    },
    {
      title: "Big Data & Analytics",
      icon: "📊",
      description:
        "Transform your data into actionable insights. We help you collect, process, and analyze data to make informed business decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Data Warehousing"],
    },
    {
      title: "Digital Marketing",
      icon: "📱",
      description:
        "Reach your target audience and grow your online presence. Our marketing strategies are data-driven and results-oriented.",
      features: ["SEO & SEM", "Content Marketing", "Social Media Management", "Email Marketing"],
    },
    {
      title: "Business Strategy",
      icon: "💼",
      description:
        "Develop a roadmap for success. We help you identify opportunities, mitigate risks, and create a sustainable competitive advantage.",
      features: ["Market Analysis", "Business Model Innovation", "Growth Strategy", "Digital Transformation"],
    },
    {
      title: "Graphics Design",
      icon: "🎭",
      description:
        "Create a visual identity that resonates with your audience. Our design team crafts compelling visuals that communicate your brand message.",
      features: ["Brand Identity", "Print Design", "Packaging Design", "Illustration"],
    },
    {
      title: "Content Creation",
      icon: "✍️",
      description:
        "Engage your audience with compelling content. Our content team creates high-quality, relevant content that drives engagement and conversions.",
      features: ["Blog Posts", "Social Media Content", "Video Production", "Copywriting"],
    },
    {
      title: "SEO Optimization",
      icon: "🔍",
      description:
        "Improve your search engine rankings and drive organic traffic. Our SEO experts use proven strategies to increase your online visibility.",
      features: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white z-20">
              Loxi
            </Link>

            <nav className="hidden md:flex items-center justify-center absolute left-0 right-0 mx-auto w-fit space-x-8">
              <Link href="/" className="text-white hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-orange-500 transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-white hover:text-orange-500 transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-white hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4 z-20">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 z-50 border-b border-zinc-800 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-white hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-white hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-orange-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital
              landscape.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border border-zinc-800 rounded-lg p-6 hover:border-orange-500 transition-colors group"
                >
                  <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>

                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-orange-500 group-hover:text-orange-400"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Let's work together to create innovative solutions that drive growth and success for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Get Started</Button>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-500">&copy; {new Date().getFullYear()} Loxi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

