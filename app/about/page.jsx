"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  TrendingUp,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const timeline = [
    {
      year: "2008",
      title: "PAL Builders Founded",
      description:
        "Started as a small construction company with a vision for quality.",
    },
    {
      year: "2015",
      title: "Major Expansion",
      description:
        "Expanded services to include architectural design and engineering.",
    },
    {
      year: "2018",
      title: "PAE Construction Formed",
      description: "Transformed into PAE Construction Indian OPC Pvt. Ltd.",
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description:
        "Recognized as one of Dehradun's leading construction companies.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every project, ensuring superior craftsmanship and attention to detail.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Our clients are at the heart of everything we do. We build lasting relationships through trust and transparency.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We embrace modern construction techniques and technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We operate with honesty, ethics, and commitment in all our business dealings and relationships.",
    },
  ];

  const team = [
    {
      name: "Ar. Er. Dhirendra Pratap Singh",
      position: "Managing Director",
      education: "B.Tech(Civil), M.Tech(Str.),B.Arch",
      experience: "15+ years",
      image: "/images/md.png",
      philosophy:
        "Building structures that stand the test of time while fostering innovation in construction.",
    },
    {
      name: "Ar.Rohini Pradhan",
      position: "Cheif Architect / Director",
      education: "B.Arch",
      experience: "12+ years",
      image:
        "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400",
      philosophy:
        "Designing spaces that inspire and enhance human experiences through thoughtful architecture.",
    },
    {
      name: "Er. Anil Chandra (G.M.)",
      position: "Manager",
      education: "MBA ",
      experience: "10+ years",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      philosophy:
        "Excellence in execution through meticulous planning and seamless coordination.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

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
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About us background"
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
            <h1 className="heading-primary text-white mb-6">
              About PAE Construction
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From humble beginnings as PAL Builders to becoming PAE
              Construction Indian OPC Pvt. Ltd., our journey has been driven by
              an unwavering commitment to excellence, innovation, and client
              satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-6">Our Evolution</h2>
              <p className="text-body text-gray-600 mb-6">
                What started as PAL Builders in 2008 has evolved into PAE
                Construction Indian OPC Pvt. Ltd., a comprehensive construction
                and engineering firm that serves clients across Dehradun and
                beyond.
              </p>
              <p className="text-body text-gray-600 mb-8">
                Our transformation reflects our growth in capabilities,
                expertise, and vision. We've expanded from basic construction
                services to offering complete architectural design, structural
                engineering, and project management solutions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-2xl font-bold text-black mb-2 font-montserrat">
                    200+
                  </h3>
                  <p className="text-gray-600 font-quicksand">
                    Projects Delivered
                  </p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <span className="bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl font-bold">
                    15+
                  </span>

                  <p className="text-gray-600 font-quicksand">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our evolution"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 md:-right-8 bg-white border-4 border-black p-6 max-w-xs">
                <Building2 className="h-8 w-8 text-black mb-2" />
                <p className="font-bold font-montserrat">
                  Transforming Visions into Reality
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Our Journey</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              A timeline of key milestones that shaped our company and defined
              our commitment to excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-black mb-2 font-montserrat">
                    {item.title}
                  </h3>
                  <p className="text-body text-gray-600">{item.description}</p>
                </div>

                <div className="flex flex-col items-center ">
                  <div className="w-4 h-4 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full mb-2"></div>
                  <div className="w-px h-20 bg-gray-300 last:h-0"></div>
                </div>

                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"
                  }`}
                >
                  <div className="inline-block bg-black text-white px-4 py-2 font-bold font-montserrat">
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Our Core Values</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every project
              we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-gray-200 hover:border-black transition-colors duration-300 group"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-black group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-black mb-3 font-montserrat">
                  {value.title}
                </h3>
                <p className="text-body-small text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Meet the visionaries who drive our commitment to excellence and
              innovation
            </p>
          </motion.div>

<div className="grid lg:grid-cols-3 gap-12">
  {team.map((member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-center group flex flex-col h-full"
    >
      <div className="relative overflow-hidden mb-6 flex-shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      {/* --- Key Change Here --- */}
      {/* Assign a min-height to ensure consistent spacing for the name */}
      <h3 className="text-2xl font-bold text-white mb-2 font-montserrat min-h-[56px] flex items-center justify-center">
        {/*
          min-h-[56px] is an example. You'll need to calculate this based on:
          (2 * line-height_of_h3) + (2 * margin-top/bottom_of_h3) if any.
          For 24px font, line-height is typically around 1.2-1.5, so 24*1.2 = 28.8px, 2 lines = 57.6px.
          56px or 60px should be a good starting point.
          flex items-center justify-center will vertically and horizontally center the name within this min-height
          if it's shorter than two lines.
        */}
        {member.name}
      </h3>
      {/* --- End Key Change --- */}


      <p className="text-white/80 mb-2 font-semibold font-montserrat">
        {member.position}
      </p>
      <p className="text-white/60 text-sm mb-2 font-quicksand">
        {member.education}
      </p>
      <p className="text-white/60 text-sm mb-4 font-quicksand">
        {member.experience}
      </p>
      <blockquote className="text-white/80 italic font-quicksand mt-2">
        "{member.philosophy}"
      </blockquote>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-secondary mb-8">Our Mission</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-quicksand italic mb-8">
              "To transform architectural visions into exceptional realities
              through innovative engineering, meticulous craftsmanship, and
              unwavering commitment to client satisfaction."
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                  Continuous Growth
                </h3>
                <p className="text-gray-600 font-quicksand">
                  Always evolving, learning, and improving our processes
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                  Team Excellence
                </h3>
                <p className="text-gray-600 font-quicksand">
                  Empowering our team to deliver outstanding results
                </p>
              </div>
              <div className="text-center">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                  Quality Legacy
                </h3>
                <p className="text-gray-600 font-quicksand">
                  Building structures that stand as testaments to quality
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
