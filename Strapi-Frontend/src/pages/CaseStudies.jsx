import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/pages');
        const data = await response.json();
        setCases(data.data); // Assuming the API returns an array of services
        console.log(data.data, "data-title");
        // console.log(data.data, "data-title");
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchCases();
  }, []);


  // const cases = [
  //   {
  //     title: "E-commerce Redesign",
  //     client: "Fashion Retailer",
  //     description: "Complete redesign and development of a Shopify Plus store, resulting in 150% increase in conversion rate.",
  //     image: "https://picsum.photos/800/600?random=1",
  //     tags: ["Shopify Plus", "UI/UX", "Development"]
  //   },
  //   {
  //     title: "Digital Transformation",
  //     client: "Lifestyle Brand",
  //     description: "Strategic digital transformation project including custom theme development and third-party integrations.",
  //     image: "https://picsum.photos/800/600?random=2",
  //     tags: ["Strategy", "Development", "Integration"]
  //   },
  //   {
  //     title: "Brand Evolution",
  //     client: "Wellness Company",
  //     description: "End-to-end brand refresh and e-commerce platform development with custom features.",
  //     image: "https://picsum.photos/800/600?random=3",
  //     tags: ["Branding", "Development", "UI/UX"]
  //   }
  // ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful digital transformations and e-commerce solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">View Case Study</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-xl text-gray-600 mb-4">{project.client}</p>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
