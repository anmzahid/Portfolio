// src/Components/Navbar.js
import React, { useState, useEffect } from 'react';
import dp from "/images/dp.jpg";
import { TiThMenu } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = ["Home", "About","Certifications" ,"Portfolio", "Experience", "Contact"];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 right-0 z-50 bg-gray-200 dark:bg-gray-900 shadow-md px-6 md:px-20 h-16 flex items-center justify-between'>
      <div className="flex items-center space-x-2">
        <img src={dp} className='h-12 w-12 rounded-full border-2 border-blue-500' alt="Profile" />
        <div>
          <h1 className='font-semibold text-xl text-gray-800 dark:text-gray-100'>
            Anm <span className='text-blue-500'>Zahid</span> Hossain
          </h1>
          <p className='text-sm text-gray-600 dark:text-gray-300'>Computer Science Student</p>
        </div>
      </div>

      <div className="hidden md:flex space-x-8">
        {navItems.map((text) => (
          <Link
            key={text}
            to={text}
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:scale-110 transition-transform font-semibold text-gray-800 dark:text-gray-200 cursor-pointer"
          >
            {text}
          </Link>
        ))}
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          {darkMode ? <MdLightMode size={24} className='text-yellow-400'/> : <MdDarkMode size={24} className='text-gray-800'/>}
        </button>
      </div>

      <div className='md:hidden flex items-center'>
        <button onClick={() => setDarkMode(!darkMode)} className="mr-4">
          {darkMode ? <MdLightMode size={24} className='text-yellow-400'/> : <MdDarkMode size={24} className='text-gray-800'/>}
        </button>
        <div onClick={() => setMenu(!menu)}>
          {menu ? <GiCancel size={25} className='text-gray-800 dark:text-gray-200'/> : <TiThMenu size={25} className='text-gray-800 dark:text-gray-200'/>}
        </div>
      </div>
      
      {menu && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-900 shadow-lg py-4 flex flex-col items-center space-y-4'>
          {navItems.map((text) => (
            <Link
              key={text}
              onClick={() => setMenu(false)}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:scale-110 transition-transform font-semibold text-gray-800 dark:text-gray-200 cursor-pointer"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
