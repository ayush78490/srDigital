"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, Phone, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const images = [
  "/agency1.jpeg",
  "/agency2.jpeg",
  "/agency3.jpeg",
  "/agency4.jpeg",
  "/agency5.jpeg",
  "/agency6.jpeg",
  "/agency7.jpeg",
  "/agency8.jpeg",
  "/agency9.jpeg",
  "/agency1.jpeg",
  "/agency5.jpeg",
  "/agency3.jpeg",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-zinc-800 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white z-20">
            {/* <Image
            src="/logo.png?height=5&width=5"
            alt="Business illustration"
            width={600}
            height={500}
            className="object-contain"
            /> */}
              SR Digital
            </Link>

            <nav className="hidden md:flex items-center justify-center absolute left-0 right-0 mx-auto w-fit space-x-8">
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
              <Link href="/contact" className="text-white hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4 z-20">
              <Link href="/enquiry">
                <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </Link>
              <Link href="/book-session">
                <Button
                  className="hidden md:flex border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  variant="outline"
                >
                  Book a Session
                </Button>
              </Link>
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
                  className="text-white hover:text-orange-500 transition-colors py-2"
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
                <Link href="/enquiry">
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/book-session">
                  <Button
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full"
                    variant="outline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Session
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium">
                  SR DIGITAL AGENCY
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Give your business a <span className="text-orange-500">worldwide platform</span>
                </h1>
                <p className="text-zinc-400 text-lg max-w-lg">
                  We are your one-stop solution for building brands that make an impact in the digital world. Our
                  expertise spans across various domains, ensuring your business stands out in the crowded market.
                </p>
                <Link href="/discover-more">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-6 h-auto">
                    Discover More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 relative">
                <Image
                  src="/HeroImg.png?height=500&width=600"
                  alt="Business illustration"
                  width={600}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-12 border-t border-b border-zinc-800 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Best agencies choose their clients wisely</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                According to our custormers, we are the best in the business. We have been
                providing top-notch services to our clients for over a decade. Our team of experts is dedicated to
                delivering the best results for your business.              
              </p>
            </div>

            {/* Infinite scrolling logos */}
          
          <div className="relative overflow-hidden">
            <div className="flex space-x-16 animate-marquee w-max">
              {images.concat(images).map((src, i) => ( // Duplicate for seamless looping
                <div key={i} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={`${src}?height=60&width=120`}
                    alt={`Client logo ${i + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
  
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                OUR FEATURES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Best services of every features</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                Our company provides a varity of services to help you grow your business. We are
                dedicated to providing the best services to our clients. Our team of experts is here to help you
                achieve your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Product Engineering",
                  icon: "🧩",
                  description:
                    "We provide end-to-end product development services, ensuring your ideas are transformed into scalable and efficient solutions.",
                },
                {
                  title: "UX/UI Design",
                  icon: "🎨",
                  description:
                    "Crafting intuitive and visually appealing designs to enhance user experience and engagement.",
                },
                {
                  title: "Big Data & Analytics",
                  icon: "📊",
                  description:
                    "Unlock the power of data with our analytics solutions, enabling informed decision-making and business growth.",
                },
                {
                  title: "Digital Marketing",
                  icon: "📱",
                  description:
                    "Boost your online presence with targeted marketing strategies tailored to your business needs.",
                },
                {
                  title: "Business Strategy",
                  icon: "💼",
                  description:
                    "Developing actionable strategies to drive growth and achieve your business objectives.",
                },
                {
                  title: "Graphics Design",
                  icon: "🎭",
                  description:
                    "Creating stunning visuals and branding materials to leave a lasting impression on your audience.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="border border-zinc-800 rounded-lg p-6 hover:border-orange-500 transition-colors group"
                >
                  <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-orange-500 group-hover:text-orange-400"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  Explore All Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-zinc-800/50 rounded-xl p-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="mb-4 text-2xl">"</div>
                <p className="text-lg text-zinc-300 mb-4">
                  As a midsize software development company, we combine the best of both worlds: the scale and process
                  of the big players, along with the agility and personal touch of the boutiques.
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold">Sumit Raj, CEO at SR Digital</p>
                    <p className="text-zinc-400 text-sm">Software Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1500+", label: "Completed Projects" },
                { number: "700+", label: "Happy Clients" },
                { number: "1275+", label: "Working Hours" },
                { number: "250+", label: "Awards Won" },
              ].map((stat, i) => (
                <div key={i} className="p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</h3>
                  <p className="text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Engaging more, refreshing results. We trust you</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                We are a team of dedicated professionals who are passionate about what we do. Our mission is to help
                businesses like yours succeed in the digital world. We believe in building long-term relationships with
                our clients and providing them with the best possible service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Advertising & Branding</h3>
                  <p className="text-zinc-400">
                    Advertsing and branding makes the company more popular. We are here to help you with that.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Mobile Responsive</h3>
                  <p className="text-zinc-400">
                    Our services provides you with the best mobile responsive website. We are here to help you with that.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Secure & Reliable</h3>
                  <p className="text-zinc-400">
                    Security and Reliability is one of the most important thing in a website. We provides the best security
                    and reliability for your website. We are here to help you with that.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                  <p className="text-zinc-400">
                    For constumor support our team is available 24/7. Whenever whatever you just make a call or send a mail and we are here to
                    help you. We are here to help you with that.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/about">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  View All Benefits <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">We provide creative solutions for your business</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
                For every business the solution should be creative so that user can use it easily and we make our best solution to your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Business Strategy",
                  icon: "💼",
                  description:
                    "Strategic planning to help your business navigate challenges and seize opportunities.",
                },
                {
                  title: "Web Development",
                  icon: "💻",
                  description:
                    "Building responsive and high-performing websites tailored to your business goals.",
                },
                {
                  title: "Digital Marketing",
                  icon: "📱",
                  description:
                    "Implementing innovative marketing campaigns to connect with your target audience effectively.",
                },
                {
                  title: "Graphics Design",
                  icon: "🎭",
                  description:
                    "Designing creative and impactful visuals to elevate your brand identity.",
                },
                {
                  title: "Content Creation",
                  icon: "✍️",
                  description:
                    "Producing engaging and high-quality content to captivate your audience and drive conversions.",
                },
                {
                  title: "SEO Optimization",
                  icon: "🔍",
                  description:
                    "Enhancing your website's visibility on search engines to attract more organic traffic.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="border border-zinc-800 rounded-lg p-6 hover:border-orange-500 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-zinc-400 mb-4">{service.description}</p>
                      <Link
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-orange-500 group-hover:text-orange-400"
                      >
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  Explore All Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
                SR DIGITAL
              </Link>
              <p className="text-zinc-400 mb-4">
                We are your one-stop solution for building brands that make an impact in the digital world.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/product-engineering"
                    className="text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    Product Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/services/ux-ui-design" className="text-zinc-400 hover:text-orange-500 transition-colors">
                    UX/UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/big-data-analytics"
                    className="text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    Big Data & Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/business-strategy"
                    className="text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    Business Strategy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
              <p className="text-zinc-400 mb-4">Stay updated with our latest news and offers.</p>
              <form className="space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white rounded-r-none"
                  />
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600 rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </form>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>srdigital@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-500">&copy; {new Date().getFullYear()} SR Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

