import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Brown",
      position: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Davis",
      position: "Marketing Specialist",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
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
                <Link href="/about" className="text-orange-500 transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-white hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              <button className="md:hidden text-white">
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
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We're a team of passionate digital experts committed to helping businesses succeed in the digital world.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                  OUR STORY
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Building digital experiences since 2018</h2>
                <p className="text-zinc-400 mb-4">
                  SR DIGITAL was founded with a simple mission: to help businesses harness the power of digital technology to
                  grow and succeed. What started as a small team of passionate developers has grown into a full-service
                  digital agency with a global client base.
                </p>
                <p className="text-zinc-400 mb-6">
                  Over the years, we've helped hundreds of businesses transform their digital presence, from startups to
                  Fortune 500 companies. Our approach combines technical expertise with creative thinking to deliver
                  solutions that drive real business results.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-lg"></div>
                <Image
                  src="/HeroImg.png?height=500&width=500"
                  alt="Our story"
                  width={500}
                  height={500}
                  className="rounded-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                OUR VALUES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The principles that guide us</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our values define who we are and how we work. They're the foundation of our culture and guide every
                decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  icon: "💡",
                  description:
                    "We're constantly exploring new technologies and approaches to deliver cutting-edge solutions.",
                },
                {
                  title: "Collaboration",
                  icon: "🤝",
                  description: "We believe in the power of teamwork and partnership to achieve exceptional results.",
                },
                {
                  title: "Excellence",
                  icon: "🏆",
                  description: "We're committed to delivering the highest quality work in everything we do.",
                },
              ].map((value, i) => (
                <div key={i} className="bg-zinc-800/50 rounded-lg p-6 text-center">
                  <div className="bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                OUR TEAM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the people behind SR DIGITAL</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our team of experts is passionate about helping businesses succeed in the digital world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-center space-x-4">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
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
                          className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
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
                          className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-orange-500">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Let's create something amazing together. Contact us today to get started.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Contact Us</Button>
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

