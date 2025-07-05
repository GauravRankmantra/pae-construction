"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Award,
  TrendingUp,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ArchitectureSection from "../components/ArchitectureSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"; // Import necessary modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import adani from "../public/images/clients/adani.png";

const HomePage = () => {
  const bwStyle = { filter: "grayscale(100%)" };
  const trustedClients = [
    { name: "Adani", image: "/images/clients/adani.png" },
    { name: "HGIEL", image: "/images/clients/hgiel.png" },
    { name: "Indian Railway", image: "/images/clients/indian_railway.png" },
    { name: "Ramada", image: "/images/clients/ramada.png" },
    {
      name: "UK Jal Nigam",
      image: "/images/clients/uttarakhand-jal-nigam.png",
    },
    {
      name: "Uttarakhand Sasan",
      image: "/images/clients/uttarakhand-sasan.png",
    },
    { name: "Purkul Cafe", image: "/images/clients/purkul-cafe.png" },
    { name: "Aketa Hotel", image: "/images/aketa.png" },
    { name: "PNC", image: "/images/pnc.png" },
    { name: "Uttarakhand", image: "/images/uk.png" },
  ];

  const slidesData = [
    {
      id: 1,
      imageSrc: "/images/hero5.jpg", // Ensure this image exists in /public/images/
      altText: "Modern House Exterior",
      heading: "Crafting Modern Living Spaces",
      description:
        "Designing and constructing contemporary homes that blend style with comfort.",
    },
    {
      id: 2,
      imageSrc: "/images/hero2.jpg", // Placeholder: Add your own image to /public/images/
      altText: "Elegant Interior Design",
      heading: "Innovative Designs for Your Dream Home",
      description:
        "Bringing unique architectural visions to life with precision and creativity.",
    },
    {
      id: 3,
      imageSrc: "/images/bul.jpg", // Placeholder: Add your own image to /public/images/
      altText: "Dehradun City View",
      heading: "Building the Future of India's Landscape",
      description:
        "Shaping urban and rural environments with robust and sustainable construction.",
    },
    {
      id: 4,
      imageSrc: "/images/hero.jpg", // Placeholder: Add your own image to /public/images/
      altText: "Dehradun City View",
      heading: "Building the Future of India's Landscape",
      description:
        "Developing infrastructure and commercial spaces that stand the test of time.",
    },
  ];

  const stats = [
    { icon: Building2, number: "200+", label: "Projects Completed" },
    { icon: Users, number: "50+", label: "Team Members" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: TrendingUp, number: "98%", label: "Client Satisfaction" },
  ];

  const recentProjects = [
    {
      title: "TOURIST REST HOUSE (TRH) KANVASHRAM FOR G.M.V.N",
      category: "Commercial",
      description:
        "Designed a serene tourist rest house, blending modern comfort with the natural beauty of Kanvashram, providing a peaceful retreat for visitors.",
      image:
        "https://images.pexels.com/photos/280219/pexels-photo-280219.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "DESIGN AND RENOVATION OF RAIPUR POLICE STATION, DEHRADUN",
      category: "Public Sector", // Corrected category for clarity
      description:
        "Undertook the comprehensive redesign and renovation of the Raipur Police Station, enhancing its functionality and public accessibility in Dehradun.",
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "DESIGN AND CONSTRUCTION OF RESIDENCE AT CANAL ROAD, DEHRADUN",
      category: "Residential", // Corrected category for clarity
      description:
        "Executed the design and construction of a bespoke residential property in Canal Road, Dehradun, focusing on contemporary living and efficiency.",
      image:
        "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "RESIDENTIAL BUILDING DESIGN FOR AT KALAGHAT NEAR, DEHRADUN",
      category: "Residential", // Corrected category for clarity
      description:
        "Provided innovative architectural design for a residential complex near Kalaghat, Dehradun, optimizing space and natural light for residents.",
      image:
        "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "RESIDENTIAL BUILDING DESIGN FOR AT DEHRADUN",
      category: "Residential", // Corrected category for clarity
      description:
        "Developed comprehensive design plans for a modern residential building in Dehradun, tailored to urban living standards and aesthetics.",
      image:
        "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "COMMERCIAL COMPLEX DEVELOPMENT, DEHRADUN",
      category: "Commercial",
      description:
        "Designed and developed a multi-story commercial complex, integrating retail and office spaces with modern amenities.",
      image:
        "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "EDUCATIONAL INSTITUTION EXPANSION, DEHRADUN",
      category: "Institutional",
      description:
        "Managed the expansion of a prominent educational institution, focusing on sustainable design and functional learning environments.",
      image:
        "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-100 text-black  flex flex-col items-center justify-between">
        {/* Top Content */}
        <div className="relative w-full overflow-hidden ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="fade"
            loop={true} // Loop through slides
            className="mySwiper" // Custom class for Swiper instance if needed for more specific styling
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full bg-slate-100 h-[600px] lg:h-[85vh]">
                  {/* Image component */}
                  <Image
                    src={slide.imageSrc}
                    alt={slide.altText}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    priority={slide.id === 1}
                    className=" object-cover"
                  />

                  <div className="absolute bottom-0 bg-gradient-to-t from-black via-black/50 w-full to-transparent  flex flex-col py-2 md:py-0 p-4 md:p-12">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-10 drop-shadow-lg max-w-3xl">
                      {slide.heading}
                    </h1>
                    <h1 className="text-gray-200 font-light py-3 md:py-6 leading-tight drop-shadow-lg max-w-3xl">
                      {slide.description}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
          {/* Bottom Scroll Badge - positioned relative to the parent container of Swiper */}
          {/* <div className="absolute bottom-[-30px] right-3 md:right-16 z-20">
            <div className="w-20 h-20 rounded-full bg-white border border-gray-300 flex flex-col items-center justify-center text-[12px] font-bold tracking-wide text-center leading-tight shadow-md">
              SCROLL
              <br />
              DOWN
              <ArrowDown className="h-4 w-4 mt-1 text-gray-700" />
            </div>
          </div> */}
        </div>
        {/* 
        <div className="w-full  max-w-6xl flex py-10 md:py-16 md:gap-4 items-center">
        
          <div className="hidden lg:flex font-montserrat font-bold text-gray-500 w-[10rem] flex-col items-start justify-center text-left text-xl  tracking-widest  transform origin-left whitespace-nowrap">
            <span>FOUNDATIONS</span>
            <span>OF</span>
            <span>QUALITY</span>
          </div>

        
          <div className="text-center  w-full  flex flex-col items-center">
            <h1 className="text-4xl  sm:text-5xl tracking-wide  md:text-6xl lg:text-7xl font-bold  font-[Montserrat]">
              CONSTRUCTION
              <span className="bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                ✹
              </span>
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl tracking-wide  md:text-6xl font-bold lg:text-7xl font-[Montserrat]"
            >
              <span className="block mt-3">PROJECT MANAGEMENT</span>
            </motion.h1>

            <p className="mt-4 text-gray-600 font-semibold text-sm md:text-lg max-w-md">
              PAE CONSTRUCTION INDIAN (OPC) PVT. LTD.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 hidden md:block px-6 py-2 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold"
            >
              Contact Us
            </motion.button>
          </div>

        
          <div className="hidden lg:flex font-montserrat font-bold text-gray-500 w-[10rem] flex-col items-start justify-center text-left text-xl  tracking-widest  transform origin-left whitespace-nowrap">
            <span>FROM </span>
            <span>BLUEPRINT TO </span>
            <span>REALITY</span>
          </div>

        </div> */}

        {/* House Image */}

        {/* Keyword Tags */}
        {/* <div className=" flex flex-wrap justify-center gap-2 md:text-lg font-medium md:mt-5">
          {[
            "Design Planning",
            "Structure",
            "Foundation",
            "Safety",
            "Preparation",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 bg-white border border-black rounded-full"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </section>
      {/* Trusted Clients */}
      <section className="py-10 md:py-16 bg-slate-100 border-b border-gray-200">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-tertiary mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-body text-gray-600">
              We've had the privilege to work with some of India's most
              respected institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 justify-center items-center">
            {trustedClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-items-center justify-center p-4 bg-slate-100 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-20 h-12 md:w-24 md:h-16 flex items-center justify-center mb-2">
                  <Image
                    src={client.image}
                    alt={client.name}
                    layout="fill"
                    objectFit="contain"
                    className="object-contain"
                    // style={bwStyle} // Apply the grayscale filter here
                  />
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-700 text-center">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ArchitectureSection />

      {/* Services Overview */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-4">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-6">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-body text-gray-600 mb-8">
                From initial architectural concepts to final construction
                delivery, we provide end-to-end solutions that bring your vision
                to life with precision and quality.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Architectural Design & Planning",
                  "Structural Engineering",
                  "Project Management",
                  "Construction & Execution",
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                    <span className="text-body">{service}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="btn-primary inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <Image
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction services"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 md:-left-8 left-0 bg-black text-white p-6">
                <p className="text-2xl font-bold font-montserrat">
                  {" "}
                  <span className="bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    15+
                  </span>
                  Years
                </p>
                <p className="text-white/80 font-quicksand">of Excellence</p>
              </div>
            </motion.div>

            <div className="relative lg:hidden block">
              <Image
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction services"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 md:-left-8 left-0 bg-black text-white p-6">
                <p className="text-2xl font-bold font-montserrat">15+ Years</p>
                <p className="text-white/80 font-quicksand">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-3xl md:text-4xl font-bold mb-2 font-montserrat">
                  {stat.number}
                </h3>
                <p className="text-white/80 font-quicksand">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            Our Recent{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30} // Space between slides
            slidesPerView={1} // Default for mobile
            autoplay={{
              delay: 2000, // Auto-slide every 4 seconds
              disableOnInteraction: false, // Keep autoplaying even if user interacts
            }}
            loop={true} // Loop through slides
            breakpoints={{
              // when window width is >= 640px (sm breakpoint)
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px (md breakpoint)
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px (lg breakpoint)
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper pb-12" // pb-12 for pagination dots space
          >
            {recentProjects.map((project, index) => (
              <SwiperSlide key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }} // Reduced delay for smoother Swiper animation
                  viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of element is in view
                  className="group relative bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative rounded-lg w-full h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill" // Fill the parent div
                      objectFit="cover" // Cover the area, cropping if necessary
                      quality={80}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex text-start flex-col flex-grow">
                    <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 font-quicksand flex-grow">
                      {project.description}
                    </p>
                    {/* <button className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    View Project
                    <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  </button> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-black border-t border-black">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-black mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and turn your vision into
              reality
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 font-semibold font-montserrat transition-all duration-300 hover:bg-gray-200 inline-flex items-center"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="border-2 border-gray-700 text-black px-8 py-4 font-semibold font-montserrat transition-all duration-300 hover:bg-white hover:text-black inline-flex items-center"
                >
                  Learn About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
