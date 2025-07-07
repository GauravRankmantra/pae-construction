"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Calculator,
  Users,
  Hammer,
  PenTool,
  Cog,
  ClipboardCheck,
  Building,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
const mainServices = [
  {
    icon: ClipboardCheck,
    title: "Site Survey and Analysis",
    description:
      "Accurate site assessment to inform smart design and construction decisions.",
    features: [
      "Topographical surveys",
      "Site measurements and boundaries",
      "Environmental impact assessments",
      "Climatic and solar analysis",
      "Soil and drainage investigation",
      "Access and transportation analysis",
    ],
    image: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: PenTool,
    title: "Architectural Programming",
    description:
      "Defining design goals, space needs, and functional requirements for successful project execution.",
    features: [
      "Client requirement analysis",
      "Space and function allocation",
      "Adjacency diagrams",
      "Workflow and circulation study",
      "Regulatory requirement mapping",
    ],
    image: "https://images.unsplash.com/photo-1727522974614-b592018e49e1?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Calculator,
    title: "Built-form and Feasibility studies",
    description:
      "Analyzing potential development options for optimized site use and investment returns.",
    features: [
      "Site potential analysis",
      "Development control norms review",
      "Cost-benefit analysis",
      "Building envelope evaluation",
      "Zoning and bylaw compliance",
    ],
    image: "https://images.unsplash.com/photo-1716840646010-e5622fd6683d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: PenTool,
    title: "Concept and Schematic Design",
    description:
      "Creative design exploration to establish the foundation for the project’s spatial identity.",
    features: [
      "Mass development studies",
      "Preliminary floor plans & elevations",
      "Material & facade options",
      "3D visualizations",
      "Client review presentations",
    ],
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
  {
    icon: ClipboardCheck,
    title: "Tender Documentation (DPR)",
    description:
      "Comprehensive project reports and documents required for contractor bidding and approval.",
    features: [
      "Detailed Project Report (DPR) creation",
      "Scope of work documents",
      "Technical specifications",
      "BOQ and cost estimates",
      "Bidding process support",
    ],
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
  },
  {
    icon: Hammer,
    title: "Construction Drawings and Documentation",
    description:
      "Precise technical drawings to guide construction and ensure design intent is met on-site.",
    features: [
      "Working drawings",
      "Service layout drawings (MEP)",
      "Structural details",
      "Wall sections and elevations",
      "Reflected ceiling plans",
    ],
    image: "https://images.unsplash.com/photo-1603901622056-0a5bee231395?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: ClipboardCheck,
    title: "Architectural Site Supervision",
    description:
      "On-site design supervision to ensure quality, accuracy, and adherence to the architectural vision.",
    features: [
      "Regular site visits",
      "Design intent verification",
      "Workmanship checks",
      "Coordination with contractors",
      "Issue resolution and change management",
    ],
    image: "https://images.pexels.com/photos/5854195/pexels-photo-5854195.jpeg",
  },
  {
    icon: PenTool,
    title: "Housing Development",
    description:
      "Planning and designing livable, sustainable housing communities for urban and suburban contexts.",
    features: [
      "Master planning for residential zones",
      "Affordable housing design",
      "Multi-family dwellings",
      "Circulation and green space planning",
    ],
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
  {
    icon: PenTool,
    title: "Urban Design",
    description:
      "Creating functional, beautiful, and people-centered urban environments through holistic planning.",
    features: [
      "Urban revitalization plans",
      "Streetscape & public realm design",
      "Transit-oriented development",
      "Zoning & policy review",
    ],
    image: "https://images.unsplash.com/photo-1587260704881-fff9988fda80?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Calculator,
    title: "Spatial Design",
    description:
      "Designing innovative and responsive interior and exterior spaces that enrich user experience.",
    features: [
      "Flow and movement optimization",
      "Multifunctional spaces",
      "Furniture layout planning",
      "Lighting & ambiance integration",
    ],
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    icon: PenTool,
    title: "Landscape Design",
    description:
      "Integrating built form with nature through aesthetically appealing and ecologically sound designs.",
    features: [
      "Hardscape & softscape planning",
      "Plantation strategies",
      "Water bodies & features",
      "Outdoor furniture and lighting",
    ],
    image: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg",
  },
  {
    icon: PenTool,
    title: "Interior Design",
    description:
      "Curating interiors that balance aesthetics, function, and lifestyle with meticulous detailing.",
    features: [
      "Material selection",
      "Custom furniture design",
      "Theme-based styling",
      "Lighting design",
      "Color palettes & textures",
    ],
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    icon: ClipboardCheck,
    title: "Interior Furniture Selection & Details",
    description:
      "Detailed selection and design of furniture pieces to complement interiors perfectly.",
    features: [
      "Custom furniture design",
      "Ergonomic assessment",
      "Finish & material selection",
      "Joinery and detailing",
    ],
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
  },
  {
    icon: Hammer,
    title: "Sustainable and Green Building Designs",
    description:
      "Eco-conscious architectural practices to reduce environmental impact and improve efficiency.",
    features: [
      "Passive cooling techniques",
      "Solar & rainwater systems",
      "Material reuse and recycling",
      "Energy-efficient systems",
      "Green certification support (LEED, GRIHA)",
    ],
    image: "https://images.unsplash.com/photo-1556983852-43bf21186b2a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: ClipboardCheck,
    title: "Conservation, Restoration, Adaptive reuse, Renovation of Built Structures",
    description:
      "Preserving architectural heritage and adapting existing structures for contemporary use.",
    features: [
      "Condition assessment and survey",
      "Heritage restoration techniques",
      "Structural retrofitting",
      "Adaptive reuse strategies",
      "Material preservation",
    ],
    image: "https://images.unsplash.com/photo-1643810771311-4f7108d7a280?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
      icon: ClipboardCheck,
      title: "Valuer",
      description: "End-to-end project coordination and execution management",
      features: [
        "Income tax valuations",
        "Bank valuation",
        "Property recognition and valuation"

      ],
      image:
        "https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg",
    },
];


  const specializedServices = [
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes",
    },
    {
      icon: Users,
      title: "Residential Development",
      description: "Custom homes, apartments, and residential communities",
    },
    {
      icon: Cog,
      title: "Industrial Facilities",
      description:
        "Warehouses, manufacturing plants, and industrial structures",
    },
    {
      icon: Compass,
      title: "Infrastructure",
      description: "Roads, bridges, and public infrastructure projects",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial meeting to understand your vision and requirements",
    },
    {
      step: "02",
      title: "Design Development",
      description: "Creating detailed plans and 3D visualizations",
    },
    {
      step: "03",
      title: "Planning & Permits",
      description: "Obtaining necessary approvals and permits",
    },
    {
      step: "04",
      title: "Construction",
      description: "Professional execution with quality monitoring",
    },
    {
      step: "05",
      title: "Completion",
      description: "Final inspection and handover of your project",
    },
  ];

  return (
    <div className="min-h-screen">
                <Link
                  href={"/contact"}
                  className="
          mt-6
          fixed     
          md:right-[4rem]   
          right-2 
          bottom-2          
          md:bottom-[2rem] 
          z-50
          px-6
          rounded-full
          py-2
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          text-white
          text-lg
          font-semibold
        "
                >
                  Contact Us
                </Link>
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/712.jpg"
            alt="Services background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="heading-primary text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive construction and engineering solutions designed to
              bring your vision to life with precision, quality, and innovation
              at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Core Services</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              From initial design concepts to final construction, we provide
              comprehensive solutions for all your building needs
            </p>
          </motion.div>

          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-black mr-4" />

                    <h3 className="heading-tertiary bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-body text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                        <span className="text-body-small">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="btn-primary inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute -bottom-6 right-0 md:-right-6 bg-black text-white p-4">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Specialized Solutions</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Tailored services for specific project types and industry
              requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-black hover:shadow-lg transition-shadow duration-300 group"
              >
                <service.icon className="h-12 w-12 text-black mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-black mb-3 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-body-small text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-black text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary text-white mb-4">Our Process</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A systematic approach that ensures quality, efficiency, and client
              satisfaction at every stage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto font-bold text-xl font-montserrat group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/30 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-white/80 font-quicksand">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary  mb-6">
                Why Choose{" "}
                <strong className=" bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  PAE
                </strong>{" "}
                Construction?
              </h2>
              <p className="text-body text-gray-600 mb-8">
                With over 15 years of experience and 200+ successful projects,
                we bring unmatched expertise and commitment to every
                construction endeavor.
              </p>

              <div className="space-y-6">
                {[
                  "Experienced team of certified professionals",
                  "Modern equipment and construction techniques",
                  "Transparent pricing and project timelines",
                  "Quality assurance at every stage",
                  "Comprehensive post-completion support",
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-3 h-3 bg-black mr-4 flex-shrink-0"></div>
                    <span className="text-body">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Why choose us"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -top-8 md:-left-8 bg-white border-4 border-black p-6">
                <p className="text-3xl font-bold text-black font-montserrat">
                  15+
                </p>
                <p className="text-black font-quicksand">Years Experience</p>
              </div>
            </motion.div>

            <div className="relative blok md:hidden">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Why choose us"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -top-8 md:-left-8 bg-white border-4 border-black p-6">
                <p className="text-3xl font-bold text-black font-montserrat">
                  15+
                </p>
                <p className="text-black font-quicksand">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and create a customized
              solution that exceeds your expectations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 font-semibold font-montserrat transition-all duration-300 hover:bg-gray-200 inline-flex items-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/gallery"
                  className="border-2 border-white text-white px-8 py-4 font-semibold font-montserrat transition-all duration-300 hover:bg-white hover:text-black inline-flex items-center"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
