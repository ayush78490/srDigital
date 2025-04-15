"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function EnquiryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    setFormSubmitted(true)
  }

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
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              <Button
                className="hidden md:flex border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                variant="outline"
              >
                Book a Session
              </Button>
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
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
                <Button
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full"
                  variant="outline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Session
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tell Us About Your Project</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We're excited to learn about your business needs. Fill out the form below and our team will get back to
              you within 24 hours.
            </p>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {formSubmitted ? (
              <div className="max-w-3xl mx-auto text-center bg-zinc-800/50 rounded-xl p-12 animate-fade-in">
                <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-zinc-400 mb-8">
                  We've received your enquiry and will get back to you within 24 hours. In the meantime, feel free to
                  explore our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Back to Home</Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-zinc-800/30 rounded-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="John"
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      required
                      placeholder="Doe"
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (123) 456-7890"
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <Label>What services are you interested in?*</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Product Engineering",
                        "UX/UI Design",
                        "Big Data & Analytics",
                        "Digital Marketing",
                        "Business Strategy",
                        "Graphics Design",
                        "Content Creation",
                        "SEO Optimization",
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service.toLowerCase().replace(/\s+/g, "-")} />
                          <label
                            htmlFor={service.toLowerCase().replace(/\s+/g, "-")}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>What is your estimated budget?*</Label>
                    <RadioGroup defaultValue="5000-10000">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="under-5000" id="under-5000" />
                          <Label htmlFor="under-5000">Under $5,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5000-10000" id="5000-10000" />
                          <Label htmlFor="5000-10000">$5,000 - $10,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10000-25000" id="10000-25000" />
                          <Label htmlFor="10000-25000">$10,000 - $25,000</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25000-plus" id="25000-plus" />
                          <Label htmlFor="25000-plus">$25,000+</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">What is your timeline?*</Label>
                    <RadioGroup defaultValue="1-3-months">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="asap" id="asap" />
                          <Label htmlFor="asap">As soon as possible</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-3-months" id="1-3-months" />
                          <Label htmlFor="1-3-months">1-3 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-6-months" id="3-6-months" />
                          <Label htmlFor="3-6-months">3-6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="not-sure" id="not-sure" />
                          <Label htmlFor="not-sure">Not sure yet</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDetails">Tell us about your project*</Label>
                    <Textarea
                      id="projectDetails"
                      required
                      placeholder="Please describe your project, goals, and any specific requirements you have."
                      className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white min-h-[150px]"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the terms and conditions*
                      </label>
                      <p className="text-sm text-zinc-500">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Submit Enquiry
                </Button>
              </form>
            )}
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

