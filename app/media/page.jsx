'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure','Landscape' , 'Urban Design'];

 const projects = [
  // Residential (3)
  {
    id: 1,
    title: 'RESIDENTIAL VILLAS AT SAHASTRADHARA',
    category: 'Residential',
    location: 'Dehradun',
    year: '2023',
    image: '/images/gallery/res1.png',
    description: 'Premium hillside villas offering modern design with natural integration.',
  },
  {
    id: 2,
    title: 'LUXURY APARTMENTS AT VIJAY COLONY',
    category: 'Residential',
    location: 'Mussoorie',
    year: '2022',
    image: '/images/gallery/res2.png',
    description: 'Spacious multi-unit apartments designed for comfort and sustainability.',
  },
  {
    id: 3,
    title: 'INDEPENDENT HOUSE AT RISHIKESH ROAD',
    category: 'Residential',
    location: 'Dehradun',
    year: '2021',
    image: '/images/gallery/res3.png',
    description: 'Contemporary independent home with smart architecture.',
  },

  // Commercial (3)
  {
    id: 4,
    title: 'CORPORATE OFFICE FOR TECH HUB',
    category: 'Commercial',
    location: 'Dehradun',
    year: '2023',
    image: '/images/gallery/doonl.png',
    description: 'A high-performance workspace with energy-efficient systems.',
  },
  {
    id: 5,
    title: 'SHOWROOM COMPLEX AT EC ROAD',
    category: 'Commercial',
    location: 'Dehradun',
    year: '2022',
    image: '/images/gallery/complex.png',
    description: 'Retail and service complex with wide accessibility and visibility.',
  },
  {
    id: 6,
    title: 'TOURIST REST HOUSE (TRH) AT KANVASHRAM',
    category: 'Commercial',
    location: 'Haridwar',
    year: '2021',
    image: '/images/gallery/trh.png',
    description: 'Rest house designed for modern travel needs with eco sensibility.',
  },

  // Industrial (3)
  {
    id: 7,
    title: 'INDUSTRIAL SHED AT SELAQUI',
    category: 'Industrial',
    location: 'Dehradun',
    year: '2023',
    image: '/images/gallery/police.png',
    description: 'Heavy-duty industrial facility with clear-span steel structure.',
  },
  {
    id: 8,
    title: 'MANUFACTURING UNIT AT BAZPUR',
    category: 'Industrial',
    location: 'Uttarakhand',
    year: '2022',
    image: '/images/gallery/res4.png',
    description: 'Smart manufacturing layout promoting operational efficiency.',
  },
  {
    id: 9,
    title: 'PACKAGING FACILITY IN PANTNAGAR',
    category: 'Industrial',
    location: 'Rudrapur',
    year: '2021',
    image: '/images/gallery/res5.png',
    description: 'Clean and optimized industrial zone for packaging and logistics.',
  },

  // Infrastructure (3)
  {
    id: 10,
    title: 'BRIDGE DESIGN AT RANIPOKHARI',
    category: 'Infrastructure',
    location: 'Dehradun',
    year: '2023',
    image: '/images/gallery/res3.png',
    description: 'Steel-concrete bridge enhancing connectivity between districts.',
  },
  {
    id: 11,
    title: 'STORM WATER DRAINAGE DESIGN AT DOIWALA',
    category: 'Infrastructure',
    location: 'Dehradun',
    year: '2022',
    image: '/images/gallery/res4.png',
    description: 'Urban flood management system for monsoon resilience.',
  },
  {
    id: 12,
    title: 'RURAL ROAD PLANNING AT YAMKESHWR',
    category: 'Infrastructure',
    location: 'Pauri Garhwal',
    year: '2021',
    image: '/images/gallery/res5.png',
    description: 'Connecting isolated villages with climate-resilient roadways.',
  },

  // Landscape (3)
  {
    id: 13,
    title: 'RESORT LANDSCAPE AT JHARIPANI',
    category: 'Landscape',
    location: 'Mussoorie',
    year: '2023',
    image: '/images/gallery/trh.png',
    description: 'Scenic retreat design blending nature with comfort.',
  },
  {
    id: 14,
    title: 'URBAN PARK DEVELOPMENT AT NEHRU COLONY',
    category: 'Landscape',
    location: 'Dehradun',
    year: '2022',
    image: '/images/gallery/res1.png',
    description: 'Lush public space for recreation and community events.',
  },
  {
    id: 15,
    title: 'TERRACE GARDEN AT MALL ROAD RESIDENCE',
    category: 'Landscape',
    location: 'Mussoorie',
    year: '2021',
    image: '/images/gallery/res2.png',
    description: 'Compact rooftop greenspace with aesthetic lighting.',
  },

  // Urban Design (3)
  {
    id: 16,
    title: 'URBAN COMPLEX AT CLOCK TOWER',
    category: 'Urban Design',
    location: 'Dehradun',
    year: '2023',
    image: '/images/gallery/complex.png',
    description: 'Mixed-use development integrating work, retail, and leisure.',
  },
  {
    id: 17,
    title: 'CITY CENTER REVITALIZATION PROJECT',
    category: 'Urban Design',
    location: 'Dehradun',
    year: '2022',
    image: '/images/gallery/doonl.png',
    description: 'Urban upgrade for walkability and sustainable mobility.',
  },
  {
    id: 18,
    title: 'PUBLIC SPACES MASTERPLAN FOR RISHIKESH',
    category: 'Urban Design',
    location: 'Rishikesh',
    year: '2021',
    image: '/images/gallery/police.png',
    description: 'Integrated masterplan for public utility and beautification.',
  },
];


  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openLightbox = (project, index) => {
    setSelectedImage(project);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredProjects.length
      : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

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
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gallery background"
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
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our portfolio of completed projects showcasing excellence in design, 
              engineering, and construction across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container-max section-padding">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-gray-600" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-semibold font-montserrat transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project, index)}
                >
                  <div className="relative overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white text-black px-4 py-2 font-semibold font-montserrat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Details
                      </motion.div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-sm font-semibold font-montserrat">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-4 border-l-4 border-black">
                    <h3 className="text-xl font-bold text-black mb-2 font-montserrat">{project.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2 font-quicksand">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="text-body-small text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-600 text-lg font-quicksand">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="h-12 w-12" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="h-12 w-12" />
              </button>
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">{selectedImage.title}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-white/20 px-3 py-1 rounded font-semibold font-montserrat">
                      {selectedImage.category}
                    </span>
                    <div className="text-right font-quicksand">
                      <p>{selectedImage.location}</p>
                      <p>{selectedImage.year}</p>
                    </div>
                  </div>
                  <p className="text-white/90 font-quicksand">{selectedImage.description}</p>
                </div>
              </div>
              
              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm font-quicksand">
                {currentIndex + 1} of {filteredProjects.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Statistics */}
      <section className="py-20 bg-black text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-2 font-montserrat">50+</h3>
              <p className="text-white/80 font-quicksand">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-2 font-montserrat">20+</h3>
              <p className="text-white/80 font-quicksand">Project Categories</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-2 font-montserrat">100%</h3>
              <p className="text-white/80 font-quicksand">Client Satisfaction</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-2 font-montserrat">15+</h3>
              <p className="text-white/80 font-quicksand">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;