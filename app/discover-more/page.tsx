"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DiscoverMorePage() {
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
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      client: "Fashion Retailer",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "We helped a leading fashion retailer redesign their e-commerce platform, resulting in a 45% increase in conversion rate and a 30% decrease in cart abandonment.",
      services: ["UX/UI Design", "Product Engineering"],
    },
    {
      title: "Data Analytics Dashboard",
      client: "Financial Services Company",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "We developed a custom data analytics dashboard for a financial services company, enabling them to make data-driven decisions and identify new business opportunities.",
      services: ["Big Data & Analytics", "Product Engineering"],
    },
    {
      title: "Digital Marketing Campaign",
      client: "SaaS Startup",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "We created and executed a comprehensive digital marketing campaign for a SaaS startup, resulting in a 200% increase in qualified leads and a 50% reduction in customer acquisition cost.",
      services: ["Digital Marketing", "Content Creation"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-zinc-800 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white z-20">
              SR DIGITAL
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
        <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Discover How We Transform <span className="text-orange-500">Businesses</span>
              </h1>
              <p className="text-zinc-400 text-lg mb-8">
                Explore our comprehensive range of services, case studies, and success stories to see how we can help
                your business grow and succeed in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Our Services</Button>
                </Link>
                <Link href="/enquiry">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We offer a wide range of services to help businesses succeed in the digital world. From product
                engineering to digital marketing, we have the expertise to meet your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
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
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  View All Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                CASE STUDIES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Success Stories</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                See how we've helped businesses like yours achieve their goals through innovative digital solutions.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-zinc-800">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies.map((study, i) => (
                    <div key={i} className="bg-zinc-800/30 rounded-lg overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-orange-500 mb-2">{study.client}</div>
                        <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                        <p className="text-zinc-400 mb-4">{study.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.services.map((service, j) => (
                            <span key={j} className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                        <Link href="#" className="inline-flex items-center text-orange-500 group-hover:text-orange-400">
                          View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies
                    .filter((study) => study.services.includes("UX/UI Design"))
                    .map((study, i) => (
                      <div key={i} className="bg-zinc-800/30 rounded-lg overflow-hidden group">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={study.image || "/placeholder.svg"}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-orange-500 mb-2">{study.client}</div>
                          <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                          <p className="text-zinc-400 mb-4">{study.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.services.map((service, j) => (
                              <span key={j} className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
                                {service}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="#"
                            className="inline-flex items-center text-orange-500 group-hover:text-orange-400"
                          >
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="engineering" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies
                    .filter((study) => study.services.includes("Product Engineering"))
                    .map((study, i) => (
                      <div key={i} className="bg-zinc-800/30 rounded-lg overflow-hidden group">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={study.image || "/placeholder.svg"}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-orange-500 mb-2">{study.client}</div>
                          <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                          <p className="text-zinc-400 mb-4">{study.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.services.map((service, j) => (
                              <span key={j} className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
                                {service}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="#"
                            className="inline-flex items-center text-orange-500 group-hover:text-orange-400"
                          >
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies
                    .filter(
                      (study) =>
                        study.services.includes("Digital Marketing") || study.services.includes("Content Creation"),
                    )
                    .map((study, i) => (
                      <div key={i} className="bg-zinc-800/30 rounded-lg overflow-hidden group">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={study.image || "/placeholder.svg"}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-orange-500 mb-2">{study.client}</div>
                          <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                          <p className="text-zinc-400 mb-4">{study.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.services.map((service, j) => (
                              <span key={j} className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
                                {service}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="#"
                            className="inline-flex items-center text-orange-500 group-hover:text-orange-400"
                          >
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Link href="/portfolio">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                  View All Case Studies <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Let's work together to create innovative solutions that drive growth and success for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquiry">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Get Started</Button>
              </Link>
              <Link href="/book-session">
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
        </section>
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
  )
}

