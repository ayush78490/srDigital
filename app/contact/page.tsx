import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
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
                <Link href="/about" className="text-white hover:text-orange-500 transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-orange-500 transition-colors">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Have a question or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-zinc-400 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact information</h2>
                <p className="text-zinc-400 mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Our Location</h3>
                      <p className="text-zinc-400">123 Business Avenue, Suite 100, New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-zinc-400">info@SR DIGITAL.com</p>
                      <p className="text-zinc-400">support@SR DIGITAL.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Call Us</h3>
                      <p className="text-zinc-400">+1 (123) 456-7890</p>
                      <p className="text-zinc-400">+1 (987) 654-3210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                      <p className="text-zinc-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-zinc-400">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Connect with us</h3>
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="bg-zinc-800 rounded-lg p-4 h-[400px] flex items-center justify-center">
              <p className="text-zinc-400">Interactive Map Would Be Embedded Here</p>
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

