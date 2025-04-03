"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, X, Menu, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookSessionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookingComplete, setBookingComplete] = useState(false)

  // Generate dates for the next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split("T")[0],
          day: date.toLocaleDateString("en-US", { weekday: "short" }),
          dayOfMonth: date.getDate(),
          month: date.toLocaleDateString("en-US", { month: "short" }),
        })
      }
    }

    return dates
  }

  const availableDates = generateDates()

  // Available time slots
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingComplete(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation Session</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Schedule a one-on-one session with our experts to discuss your project needs and how we can help you
              achieve your goals.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {bookingComplete ? (
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
                <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-zinc-400 mb-4">Your consultation session has been scheduled for:</p>
                <div className="bg-zinc-800 p-4 rounded-lg inline-block mb-8">
                  <p className="font-bold text-xl">
                    {selectedDate?.split("-").reverse().join("/")} at {selectedTime}
                  </p>
                </div>
                <p className="text-zinc-400 mb-8">
                  We've sent a confirmation email with all the details. Our team is looking forward to speaking with
                  you!
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
              <div className="max-w-3xl mx-auto bg-zinc-800/30 rounded-xl p-8 md:p-12">
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className={`text-center ${currentStep >= 1 ? "text-orange-500" : "text-zinc-500"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${currentStep >= 1 ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}
                      >
                        1
                      </div>
                      <span className="text-sm">Service</span>
                    </div>
                    <div className={`text-center ${currentStep >= 2 ? "text-orange-500" : "text-zinc-500"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${currentStep >= 2 ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}
                      >
                        2
                      </div>
                      <span className="text-sm">Date & Time</span>
                    </div>
                    <div className={`text-center ${currentStep >= 3 ? "text-orange-500" : "text-zinc-500"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${currentStep >= 3 ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}
                      >
                        3
                      </div>
                      <span className="text-sm">Details</span>
                    </div>
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800 rounded"></div>
                    <div
                      className="absolute top-0 left-0 h-1 bg-orange-500 rounded transition-all duration-300"
                      style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Which service are you interested in?*</Label>
                        <Select required>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-800 border-zinc-700">
                            <SelectItem value="product-engineering">Product Engineering</SelectItem>
                            <SelectItem value="ux-ui-design">UX/UI Design</SelectItem>
                            <SelectItem value="big-data-analytics">Big Data & Analytics</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="business-strategy">Business Strategy</SelectItem>
                            <SelectItem value="graphics-design">Graphics Design</SelectItem>
                            <SelectItem value="content-creation">Content Creation</SelectItem>
                            <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>What type of consultation do you need?*</Label>
                        <RadioGroup defaultValue="initial">
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <RadioGroupItem value="initial" id="initial" className="mt-1" />
                              <div>
                                <Label htmlFor="initial" className="text-base font-medium">
                                  Initial Consultation (30 min)
                                </Label>
                                <p className="text-sm text-zinc-400">
                                  A brief introduction to discuss your needs and how we can help.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <RadioGroupItem value="detailed" id="detailed" className="mt-1" />
                              <div>
                                <Label htmlFor="detailed" className="text-base font-medium">
                                  Detailed Consultation (60 min)
                                </Label>
                                <p className="text-sm text-zinc-400">
                                  An in-depth discussion about your project requirements and solutions.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <RadioGroupItem value="technical" id="technical" className="mt-1" />
                              <div>
                                <Label htmlFor="technical" className="text-base font-medium">
                                  Technical Consultation (90 min)
                                </Label>
                                <p className="text-sm text-zinc-400">
                                  A specialized session with our technical experts to discuss complex requirements.
                                </p>
                              </div>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button onClick={handleNextStep} className="bg-orange-500 hover:bg-orange-600 text-white">
                        Next Step <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Selection */}
                {currentStep === 2 && (
                  <div className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Select a Date*</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                          {availableDates.map((dateObj) => (
                            <button
                              key={dateObj.date}
                              type="button"
                              onClick={() => handleDateSelect(dateObj.date)}
                              className={`p-3 rounded-lg border ${
                                selectedDate === dateObj.date
                                  ? "border-orange-500 bg-orange-500/10"
                                  : "border-zinc-700 bg-zinc-800 hover:border-zinc-600"
                              } text-center transition-colors`}
                            >
                              <div className="text-sm text-zinc-400">{dateObj.day}</div>
                              <div className="text-lg font-bold">{dateObj.dayOfMonth}</div>
                              <div className="text-sm">{dateObj.month}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedDate && (
                        <div className="space-y-2 animate-fade-in">
                          <Label>Select a Time*</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => handleTimeSelect(time)}
                                className={`p-3 rounded-lg border ${
                                  selectedTime === time
                                    ? "border-orange-500 bg-orange-500/10"
                                    : "border-zinc-700 bg-zinc-800 hover:border-zinc-600"
                                } text-center transition-colors`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button onClick={handlePrevStep} variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                        <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                      </Button>
                      <Button
                        onClick={handleNextStep}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        disabled={!selectedDate || !selectedTime}
                      >
                        Next Step <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Details */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="animate-fade-in">
                    <h2 className="text-2xl font-bold mb-6">Your Details</h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                        <Label htmlFor="phone">Phone Number*</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+1 (123) 456-7890"
                          className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Acme Inc."
                          className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Please share any specific topics you'd like to discuss during the consultation."
                          className="bg-zinc-800 border-zinc-700 focus:border-orange-500 text-white min-h-[100px]"
                        />
                      </div>

                      <div className="p-4 bg-zinc-800/50 rounded-lg">
                        <h3 className="font-medium mb-2">Your Booking Summary</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-zinc-400">Date:</div>
                          <div>{selectedDate?.split("-").reverse().join("/")}</div>
                          <div className="text-zinc-400">Time:</div>
                          <div>{selectedTime}</div>
                          <div className="text-zinc-400">Duration:</div>
                          <div>60 minutes</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button
                        onClick={handlePrevStep}
                        type="button"
                        variant="outline"
                        className="border-zinc-700 hover:bg-zinc-800"
                      >
                        <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                      </Button>
                      <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Confirm Booking
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}
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

