'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Heart, 
  Upload, 
  Mail, 
  Phone,
  MapPin,
  Award,
  Building2,
  Coffee
} from 'lucide-react';
import Image from 'next/image';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const openPositions = [
    {
      title: 'Senior Civil Engineer',
      department: 'Engineering',
      location: 'Dehradun',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead structural design and analysis for commercial and residential projects.',
      requirements: [
        'B.Tech/M.Tech in Civil Engineering',
        '5+ years of structural design experience',
        'Proficiency in AutoCAD, STAAD Pro, ETABS',
        'Strong knowledge of Indian building codes',
        'Excellent communication skills'
      ]
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Dehradun',
      type: 'Full-time',
      experience: '6-10 years',
      description: 'Oversee construction projects from planning to completion, ensuring quality and timelines.',
      requirements: [
        'B.Tech/MBA in relevant field',
        '6+ years of project management experience',
        'PMP certification preferred',
        'Strong leadership and communication skills',
        'Experience with construction management software'
      ]
    },
    {
      title: 'Architect',
      department: 'Design',
      location: 'Dehradun',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Create innovative architectural designs for residential and commercial projects.',
      requirements: [
        'B.Arch/M.Arch degree',
        '3+ years of architectural design experience',
        'Proficiency in AutoCAD, Revit, SketchUp',
        'Strong creative and visualization skills',
        'Portfolio of completed projects'
      ]
    },
    {
      title: 'Site Supervisor',
      department: 'Construction',
      location: 'Dehradun',
      type: 'Full-time',
      experience: '4-7 years',
      description: 'Supervise daily construction activities and ensure quality standards.',
      requirements: [
        'Diploma/B.Tech in Civil Engineering',
        '4+ years of site supervision experience',
        'Knowledge of construction methods and safety',
        'Strong problem-solving abilities',
        'Ability to work in challenging environments'
      ]
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and skill development programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths with merit-based promotions'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and supportive work environment'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based incentives and recognition programs'
    },
    {
      icon: Building2,
      title: 'Modern Workplace',
      description: 'State-of-the-art office facilities and latest technology'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review your submission and get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Careers background"
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
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Build your career with PAE Construction. We're always looking for talented individuals 
              who share our passion for excellence and innovation in construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Why Choose PAE Construction?</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              We believe in nurturing talent, fostering innovation, and creating an environment 
              where our team members can thrive and grow their careers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-gray-200 hover:border-black transition-colors duration-300 group"
              >
                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-black group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-black mb-3 font-montserrat">{benefit.title}</h3>
                <p className="text-body-small text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Current Openings</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Explore exciting career opportunities and become part of our growing team
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-black hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-black font-montserrat">{position.title}</h3>
                      <span className="bg-black text-white px-3 py-1 text-sm font-semibold font-montserrat">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600 font-quicksand">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <p className="text-body text-gray-700 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-black mb-2 font-montserrat">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-body-small text-gray-600">
                            <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex lg:flex-col gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary w-full"
                      onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Apply Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary w-full"
                    >
                      Share Job
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Apply for a Position</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Don't see a perfect match? Send us your resume anyway! We're always interested in meeting talented individuals.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                    placeholder="Enter your full name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                    placeholder="Enter your phone number"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="position" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                    Position Applied For
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((position) => (
                      <option key={position.title} value={position.title}>
                        {position.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="experience" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                  Years of Experience
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                  placeholder="e.g., 5 years"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="resume" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 hover:border-black transition-colors duration-300 p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="cursor-pointer text-black hover:text-gray-600 font-semibold font-montserrat"
                  >
                    Click to upload your resume
                  </label>
                  <p className="text-gray-500 text-sm mt-2 font-quicksand">PDF, DOC, or DOCX (max 5MB)</p>
                  {formData.resume && (
                    <p className="text-black mt-2 font-quicksand">Selected: {formData.resume.name}</p>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand resize-vertical"
                  placeholder="Tell us why you'd be a great fit for our team..."
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-12 py-4"
                >
                  Submit Application
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-20 bg-black text-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary text-white mb-4">Have Questions?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get in touch with our HR team for any career-related inquiries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Mail className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Email Us</h3>
              <p className="text-white/80 font-quicksand">careers@paeconstruction.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Call Us</h3>
              <p className="text-white/80 font-quicksand">+91 135 123 4567</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">Visit Us</h3>
              <p className="text-white/80 font-quicksand">Dehradun, Uttarakhand</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;