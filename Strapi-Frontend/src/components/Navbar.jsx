import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className={isScrolled ? 'text-black' : 'text-white'}>boco.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-blue-500 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/case-studies"
              className={`${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-blue-500 transition-colors`}
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full ${
                isScrolled
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-white text-black hover:bg-gray-100'
              } transition-colors`}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
