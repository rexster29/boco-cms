import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/services');
        const data = await response.json();
        setServices(data.data); // Assuming the API returns an array of services
        console.log(data);
        // console.log(data.data, "data-title");
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Design & Build
            <span className="text-blue-500"> Strategic</span> Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            As Shopify Partners and a leading eCommerce Web Design Agency, 
            we empower brands to thrive through strategic design and robust development.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Book a Call
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {
            // [
            //   {
            //     title: "Web Design",
            //     description: "Creating stunning, conversion-focused designs that captivate your audience."
            //   },
            //   {
            //     title: "Development",
            //     description: "Building robust, scalable solutions with cutting-edge technology."
            //   },
            //   {
            //     title: "Strategy",
            //     description: "Crafting data-driven strategies to maximize your digital success."
            //   }
            // ]
            services.length > 0 && services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <Link 
            to="/case-studies" 
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all mr-4"
          >
            View Our Work
          </Link>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
