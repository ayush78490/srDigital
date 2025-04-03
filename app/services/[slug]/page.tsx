import Link from "next/link"
import { Check, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const servicesData = {
  "product-engineering": {
    title: "Product Engineering",
    icon: "🧩",
    description:
      "We build scalable, robust products with cutting-edge technologies. Our engineering team delivers solutions that drive business growth and innovation.",
    longDescription:
      "Our Product Engineering services help businesses build innovative, scalable, and robust software products. We combine technical expertise with industry knowledge to deliver solutions that meet your specific business needs. From concept to deployment, we handle every aspect of the product development lifecycle.",
    features: [
      "Custom Software Development",
      "API Integration",
      "DevOps & Cloud Solutions",
      "Quality Assurance",
      "Maintenance & Support",
      "Performance Optimization",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$2,999",
        description: "Perfect for startups and small businesses",
        features: [
          "Requirements Analysis",
          "UI/UX Design",
          "Frontend Development",
          "Basic Backend Integration",
          "1 Month Support",
        ],
        notIncluded: [
          "Advanced API Integration",
          "DevOps Setup",
          "Performance Optimization",
          "Dedicated Project Manager",
        ],
      },
      {
        name: "Professional",
        price: "$5,999",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "Advanced API Integration",
          "DevOps Setup",
          "Database Optimization",
          "3 Months Support",
          "Dedicated Project Manager",
        ],
        notIncluded: ["24/7 Support", "Custom Analytics Dashboard", "Load Testing"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale enterprise solutions",
        features: [
          "Everything in Professional",
          "24/7 Support",
          "Custom Analytics Dashboard",
          "Load Testing",
          "Scalability Planning",
          "Priority Bug Fixes",
          "Quarterly Strategy Reviews",
        ],
        notIncluded: [],
      },
    ],
    process: [
      {
        title: "Discovery",
        description: "We start by understanding your business goals, target audience, and project requirements.",
      },
      {
        title: "Planning",
        description:
          "Our team creates a detailed project plan, including timelines, milestones, and resource allocation.",
      },
      {
        title: "Design",
        description: "We design the user interface and experience, focusing on usability and visual appeal.",
      },
      {
        title: "Development",
        description: "Our engineers build your product using the latest technologies and best practices.",
      },
      {
        title: "Testing",
        description: "We conduct thorough testing to ensure your product is bug-free and performs optimally.",
      },
      {
        title: "Deployment",
        description: "We deploy your product to production and ensure a smooth launch.",
      },
      {
        title: "Support",
        description: "Our team provides ongoing support and maintenance to keep your product running smoothly.",
      },
    ],
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    icon: "🎨",
    description:
      "Create intuitive, engaging user experiences that delight your customers. Our design team focuses on usability, accessibility, and visual appeal.",
    longDescription:
      "Our UX/UI Design services help businesses create intuitive, engaging, and visually appealing digital experiences. We focus on understanding your users' needs and behaviors to design interfaces that are both beautiful and functional. Our design process is collaborative, iterative, and data-driven.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Interaction Design",
      "Design Systems",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$1,999",
        description: "Perfect for startups and small businesses",
        features: ["User Research", "Wireframing", "Basic Visual Design", "1 Round of Revisions", "Design Handoff"],
        notIncluded: ["Prototyping", "Usability Testing", "Design System", "Multiple Device Designs"],
      },
      {
        name: "Professional",
        price: "$3,999",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "Interactive Prototyping",
          "Usability Testing",
          "3 Rounds of Revisions",
          "Multiple Device Designs",
          "Design Documentation",
        ],
        notIncluded: ["Complete Design System", "Animation & Microinteractions", "Ongoing Design Support"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale enterprise solutions",
        features: [
          "Everything in Professional",
          "Complete Design System",
          "Animation & Microinteractions",
          "Unlimited Revisions",
          "Ongoing Design Support",
          "Quarterly Design Reviews",
          "Design Workshops",
        ],
        notIncluded: [],
      },
    ],
    process: [
      {
        title: "Research",
        description: "We conduct user research to understand your target audience's needs, behaviors, and pain points.",
      },
      {
        title: "Information Architecture",
        description: "We organize your content and functionality in a way that's intuitive and easy to navigate.",
      },
      {
        title: "Wireframing",
        description: "We create low-fidelity wireframes to establish the layout and structure of your interface.",
      },
      {
        title: "Prototyping",
        description: "We build interactive prototypes to test and refine the user experience.",
      },
      {
        title: "Visual Design",
        description: "We create high-fidelity designs that align with your brand and appeal to your target audience.",
      },
      {
        title: "Testing",
        description: "We conduct usability testing to identify and address any issues before implementation.",
      },
      {
        title: "Handoff",
        description: "We provide developers with all the assets and specifications they need to implement the design.",
      },
    ],
  },
  "big-data-analytics": {
    title: "Big Data & Analytics",
    icon: "📊",
    description:
      "Transform your data into actionable insights. We help you collect, process, and analyze data to make informed business decisions.",
    longDescription:
      "Our Big Data & Analytics services help businesses harness the power of their data to drive growth and innovation. We provide end-to-end solutions for data collection, processing, analysis, and visualization. Our team of data scientists and engineers use the latest technologies and methodologies to extract meaningful insights from your data.",
    features: [
      "Data Visualization",
      "Predictive Analytics",
      "Business Intelligence",
      "Data Warehousing",
      "Machine Learning",
      "Real-time Analytics",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$3,499",
        description: "Perfect for startups and small businesses",
        features: [
          "Data Assessment",
          "Basic Data Visualization",
          "Standard Reports",
          "Data Cleaning",
          "1 Month Support",
        ],
        notIncluded: ["Predictive Analytics", "Custom Dashboards", "Real-time Analytics", "Machine Learning Models"],
      },
      {
        name: "Professional",
        price: "$6,999",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "Custom Dashboards",
          "Advanced Visualization",
          "Predictive Analytics",
          "Data Integration",
          "3 Months Support",
        ],
        notIncluded: ["Real-time Analytics", "Machine Learning Models", "AI-powered Insights"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale enterprise solutions",
        features: [
          "Everything in Professional",
          "Real-time Analytics",
          "Machine Learning Models",
          "AI-powered Insights",
          "Data Strategy Consulting",
          "Dedicated Data Scientist",
          "Quarterly Strategy Reviews",
        ],
        notIncluded: [],
      },
    ],
    process: [
      {
        title: "Data Assessment",
        description:
          "We evaluate your current data sources, quality, and infrastructure to identify opportunities and challenges.",
      },
      {
        title: "Strategy Development",
        description: "We create a data strategy aligned with your business goals and objectives.",
      },
      {
        title: "Data Collection",
        description: "We implement systems to collect and store data from various sources.",
      },
      {
        title: "Data Processing",
        description: "We clean, transform, and prepare your data for analysis.",
      },
      {
        title: "Analysis & Modeling",
        description: "Our data scientists analyze your data and build predictive models to extract insights.",
      },
      {
        title: "Visualization",
        description: "We create interactive dashboards and reports to communicate insights effectively.",
      },
      {
        title: "Implementation",
        description: "We help you implement data-driven strategies and monitor their performance.",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: "📱",
    description:
      "Reach your target audience and grow your online presence. Our marketing strategies are data-driven and results-oriented.",
    longDescription:
      "Our Digital Marketing services help businesses reach their target audience, increase brand awareness, and drive conversions. We develop comprehensive marketing strategies tailored to your specific goals and budget. Our team of marketing experts uses data-driven approaches to maximize your ROI.",
    features: [
      "SEO & SEM",
      "Content Marketing",
      "Social Media Management",
      "Email Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$1,499/mo",
        description: "Perfect for startups and small businesses",
        features: [
          "SEO Audit",
          "Keyword Research",
          "Basic Content Creation",
          "Social Media Setup",
          "Monthly Reporting",
        ],
        notIncluded: ["PPC Management", "Email Marketing", "Conversion Rate Optimization", "Advanced Analytics"],
      },
      {
        name: "Professional",
        price: "$2,999/mo",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "PPC Management",
          "Email Marketing",
          "Content Calendar",
          "Social Media Management",
          "Bi-weekly Reporting",
        ],
        notIncluded: ["Conversion Rate Optimization", "Advanced Analytics", "Marketing Automation"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale enterprise solutions",
        features: [
          "Everything in Professional",
          "Conversion Rate Optimization",
          "Advanced Analytics",
          "Marketing Automation",
          "Dedicated Marketing Manager",
          "Custom Strategy Development",
          "Weekly Reporting",
        ],
        notIncluded: [],
      },
    ],
    process: [
      {
        title: "Audit & Analysis",
        description: "We analyze your current marketing efforts, competitors, and target audience.",
      },
      {
        title: "Strategy Development",
        description: "We create a comprehensive marketing strategy aligned with your business goals.",
      },
      {
        title: "Implementation",
        description: "We execute the strategy across various channels and platforms.",
      },
      {
        title: "Content Creation",
        description: "We develop engaging content that resonates with your target audience.",
      },
      {
        title: "Campaign Management",
        description: "We manage and optimize your marketing campaigns for maximum performance.",
      },
      {
        title: "Monitoring & Analysis",
        description: "We continuously monitor campaign performance and make data-driven adjustments.",
      },
      {
        title: "Reporting",
        description: "We provide regular reports on key metrics and ROI.",
      },
    ],
  },
  "business-strategy": {
    title: "Business Strategy",
    icon: "💼",
    description:
      "Develop a roadmap for success. We help you identify opportunities, mitigate risks, and create a sustainable competitive advantage.",
    longDescription:
      "Our Business Strategy services help organizations define their vision, set goals, and develop actionable plans to achieve them. We work closely with your leadership team to understand your business challenges and opportunities. Our strategic recommendations are based on thorough market research, competitive analysis, and industry insights.",
    features: [
      "Market Analysis",
      "Business Model Innovation",
      "Growth Strategy",
      "Digital Transformation",
      "Competitive Analysis",
      "Strategic Planning",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$4,999",
        description: "Perfect for startups and small businesses",
        features: [
          "Business Assessment",
          "Market Analysis",
          "SWOT Analysis",
          "Basic Strategy Development",
          "Implementation Roadmap",
        ],
        notIncluded: ["Competitive Analysis", "Financial Modeling", "Risk Assessment", "Executive Coaching"],
      },
      {
        name: "Professional",
        price: "$9,999",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "Competitive Analysis",
          "Financial Modeling",
          "Risk Assessment",
          "Detailed Implementation Plan",
          "3 Months Advisory Support",
        ],
        notIncluded: ["Executive Coaching", "Board Presentations", "Ongoing Strategy Reviews"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale enterprise solutions",
        features: [
          "Everything in Professional",
          "Executive Coaching",
          "Board Presentations",
          "Ongoing Strategy Reviews",
          "Change Management Support",
          "Quarterly Strategy Workshops",
          "Dedicated Strategy Consultant",
        ],
        notIncluded: [],
      },
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We conduct interviews with key stakeholders to understand your business goals, challenges, and vision.",
      },
      {
        title: "Research & Analysis",
        description: "We analyze your market, competitors, customers, and internal capabilities.",
      },
      {
        title: "Strategy Development",
        description: "We develop a comprehensive strategy that addresses your specific business needs.",
      },
      {
        title: "Implementation Planning",
        description: "We create a detailed implementation plan with timelines, milestones, and resource requirements.",
      },
      {
        title: "Presentation & Feedback",
        description: "We present our recommendations to your leadership team and incorporate feedback.",
      },
      {
        title: "Implementation Support",
        description: "We provide guidance and support during the implementation phase.",
      },
      {
        title: "Review & Refinement",
        description: "We regularly review progress and refine the strategy as needed.",
      },
    ],
  },
  "graphics-design": {
    title: "Graphics Design",
    icon: "🎭",
    description:
      "Create a visual identity that resonates with your audience. Our design team crafts compelling visuals that communicate your brand message.",
    longDescription:
      "Our Graphics Design services help businesses create visually stunning and effective brand assets. From logos and brand identity to marketing materials and digital assets, we deliver designs that capture attention and communicate your message. Our designers combine creativity with strategic thinking to create visuals that drive results.",
    features: [
      "Brand Identity",
      "Print Design",
      "Packaging Design",
      "Illustration",
      "Digital Assets",
      "Marketing Collateral",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$999",
        description: "Perfect for startups and small businesses",
        features: [
          "Logo Design",
          "Business Card Design",
          "Letterhead Design",
          "Email Signature",
          "2 Rounds of Revisions",
        ],
        notIncluded: ["Brand Guidelines", "Marketing Collateral", "Packaging Design", "Custom Illustrations"],
      },
      {
        name: "Professional",
        price: "$2,499",
        description: "Ideal for growing businesses",
        features: [
          "Everything in Basic",
          "Brand Guidelines",
          "Social Media Templates",
          "Marketing Collateral",
          "3 Rounds of Revisions",
          "Digital Asset Library",
        ],
        notIncluded: ["Packaging Design", "Custom Illustrations", "Ongoing Design Support"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale enterprise solutions",
        features: [
          "Everything in Professional",
          "Packaging Design",
          "Custom Illustrations",
          "Ongoing Design Support",
          "Print Management",
          "Quarterly Design Reviews",
          "Dedicated Design Manager",
        ],
        notIncluded: [],
      },
    ],
    process: [
      {
        title: "Discovery",
        description: "We learn about your brand, target audience, and design preferences.",
      },
      {
        title: "Research",
        description: "We research your industry, competitors, and design trends.",
      },
      {
        title: "Concept Development",
        description: "We create initial design concepts based on our research and your requirements.",
      },
      {
        title: "Refinement",
        description: "We refine the chosen concept based on your feedback.",
      },
      {
        title: "Finalization",
        description: "We finalize the design and prepare all necessary file formats.",
      },
      {
        title: "Delivery",
        description: "We deliver the final design assets and provide guidance on their use.",
      },
      {
        title: "Support",
        description: "We provide ongoing support to ensure your design assets are used effectively.",
      },
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-2xl font-bold text-white">
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
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              <button className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Service Header */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3 space-y-6">
                <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium">
                  OUR SERVICES
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                <p className="text-zinc-400 text-lg">{service.longDescription}</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-zinc-800 w-32 h-32 rounded-xl flex items-center justify-center text-6xl">
                  {service.icon}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                FEATURES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our {service.title} service includes a comprehensive set of features designed to meet your business
                needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="border border-zinc-800 rounded-lg p-6 hover:border-orange-500 transition-colors"
                >
                  <div className="bg-zinc-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature}</h3>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur. Auctor pretium porttitor ut vel. Ut consequat blandit
                    gravida magna.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                OUR PROCESS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our proven process ensures we deliver high-quality results that meet your business objectives.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {service.process.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="md:grid md:grid-cols-2 gap-8 items-center">
                      <div className={`mb-8 md:mb-0 ${i % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"}`}>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-zinc-400">{step.description}</p>
                      </div>

                      <div
                        className={`flex ${i % 2 === 0 ? "md:justify-start md:order-2" : "md:justify-end md:order-1"}`}
                      >
                        <div className="relative">
                          <div className="hidden md:block absolute left-0 top-1/2 w-8 h-0.5 bg-zinc-800 transform -translate-y-1/2"></div>
                          <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                            {i + 1}
                          </div>
                          <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-zinc-800 transform -translate-y-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-orange-500 text-sm font-medium mb-4">
                PRICING
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Plan</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                We offer flexible pricing options to meet your specific needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`border border-zinc-800 rounded-lg p-8 flex flex-col ${i === 1 ? "border-orange-500 relative" : ""}`}
                >
                  {i === 1 && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end gap-1 mb-2">
                      <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-zinc-400">/project</span>}
                    </div>
                    <p className="text-zinc-400">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <p className="font-medium">What's included:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="font-medium mt-6">Not included:</p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <X className="h-5 w-5 text-zinc-600 shrink-0 mt-0.5" />
                              <span className="text-zinc-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <Button
                    className={`w-full ${i === 1 ? "bg-orange-500 hover:bg-orange-600" : "bg-zinc-800 hover:bg-zinc-700"} text-white`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-zinc-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our {service.title} services can help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">Contact Us</Button>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                View All Services
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

