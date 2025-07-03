'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building2,
  User,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+91 135 123 4567',
      secondary: '+91 135 987 6543',
      link: 'tel:+911351234567'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@paeconstruction.com',
      secondary: 'projects@paeconstruction.com',
      link: 'mailto:info@paeconstruction.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      primary: '123 Construction Plaza',
      secondary: 'Dehradun, Uttarakhand 248001',
      link: '#map'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      primary: 'Mon - Fri: 9:00 AM - 6:00 PM',
      secondary: 'Sat: 9:00 AM - 1:00 PM',
      link: null
    }
  ];

  const projectTypes = [
    'Residential Construction',
    'Commercial Building',
    'Industrial Facility',
    'Renovation/Remodeling',
    'Architectural Design',
    'Engineering Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹10 Lakhs',
    '₹10 - 50 Lakhs',
    '₹50 Lakhs - 1 Crore',
    '₹1 - 5 Crores',
    'Above ₹5 Crores',
    'Prefer not to say'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact background"
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
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your next construction project? Get in touch with our team 
              for a free consultation and let's bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Get In Touch</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              We're here to help with all your construction and engineering needs. 
              Reach out through any of the following channels.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-gray-200 hover:border-black transition-colors duration-300 group"
              >
                <info.icon className="h-12 w-12 mx-auto mb-4 text-black group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-black mb-3 font-montserrat">{info.title}</h3>
                <div className="space-y-1">
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="block text-body-small text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      {info.primary}
                    </a>
                  ) : (
                    <p className="text-body-small text-gray-600">{info.primary}</p>
                  )}
                  <p className="text-body-small text-gray-500">{info.secondary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-tertiary mb-6">Send Us a Message</h3>
              <p className="text-body text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible 
                with a detailed response about your project.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                      placeholder="Project inquiry, consultation, etc."
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                      Project Type
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand appearance-none"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2 font-montserrat">
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-quicksand resize-vertical"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>
            
            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="heading-tertiary mb-6">Visit Our Office</h3>
                <div id="map" className="bg-gray-200 h-64 flex items-center justify-center border">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold font-montserrat">123 Construction Plaza</p>
                    <p className="font-quicksand">Dehradun, Uttarakhand 248001</p>
                    <p className="text-sm mt-2 font-quicksand">Interactive map would be embedded here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 border-l-4 border-black">
                <h4 className="text-xl font-bold text-black mb-4 font-montserrat">Quick Response Guarantee</h4>
                <p className="text-body text-gray-600 mb-4">
                  We understand that time is crucial in construction projects. That's why we guarantee:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-body-small">
                    <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                    Response within 24 hours for all inquiries
                  </li>
                  <li className="flex items-center text-body-small">
                    <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                    Free initial consultation and site visit
                  </li>
                  <li className="flex items-center text-body-small">
                    <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                    Detailed project proposal within 48 hours
                  </li>
                  <li className="flex items-center text-body-small">
                    <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                    Transparent pricing with no hidden costs
                  </li>
                </ul>
              </div>
              
              <div className="bg-black text-white p-8">
                <h4 className="text-xl font-bold text-white mb-4 font-montserrat">Emergency Support</h4>
                <p className="text-white/80 mb-4 font-quicksand">
                  For urgent construction issues or emergency repairs, contact our 24/7 support line:
                </p>
                <a 
                  href="tel:+911359876543" 
                  className="text-2xl font-bold text-white hover:text-gray-300 transition-colors font-montserrat"
                >
                  +91 135 987 6543
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. Residential projects typically take 6-12 months, while commercial projects may take 12-18 months.'
              },
              {
                question: 'Do you provide free estimates?',
                answer: 'Yes, we provide free initial consultations and detailed estimates for all potential projects. This includes site visits and preliminary assessments.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'We primarily serve Dehradun and surrounding areas in Uttarakhand, including Haridwar, Rishikesh, and Mussoorie.'
              },
              {
                question: 'Are you licensed and insured?',
                answer: 'Yes, we are fully licensed, bonded, and insured. We maintain all necessary certifications and comply with local building codes and regulations.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-black mb-3 font-montserrat">{faq.question}</h4>
                <p className="text-body-small text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;