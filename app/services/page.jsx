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
      icon: PenTool,
      title: "Architectural Design",
      description:
        "Comprehensive architectural solutions from concept to completion",
      features: [
        "Conceptual Design & Planning",
        "3D Modeling & Visualization",
        "Interior Design Solutions",
        "Sustainable Design Practices",
        "Building Code Compliance",
        "Construction Documentation",
      ],
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Calculator,
      title: "Structural Engineering",
      description:
        "Advanced engineering solutions ensuring safety and durability",
      features: [
        "Structural Analysis & Design",
        "Foundation Engineering",
        "Seismic Design Solutions",
        "Load Calculations",
        "Material Specifications",
        "Quality Assurance Testing",
      ],
      image:
        "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project coordination and execution management",
      features: [
        "Project Planning & Scheduling",
        "Resource Management",
        "Quality Control Systems",
        "Cost Management",
        "Risk Assessment",
        "Progress Monitoring",
      ],
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Hammer,
      title: "Construction Services",
      description: "Professional construction execution with modern techniques",
      features: [
        "Residential Construction",
        "Commercial Buildings",
        "Industrial Facilities",
        "Renovation & Remodeling",
        "Site Preparation",
        "Final Finishing Work",
      ],
      image:
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
