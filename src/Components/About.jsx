import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBriefcase, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      name="About"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28
                 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 
                 rounded-xl shadow-lg py-16"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-blue-500 dark:text-blue-400 text-center"
      >
        About Me
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-3xl text-blue-500 dark:text-blue-400 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Education</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm md:text-base">
            <li>BSc in Computer Science & Engineering (Final year) [CGPA: 3.82/4.00]</li>
            <li>HSC, Comilla Victoria Govt. College [GPA: 5.00]</li>
            <li>SSC, Comilla Zilla School [GPA: 5.00]</li>
          </ul>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <FaCode className="text-3xl text-blue-500 dark:text-blue-400 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Skills</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm md:text-base">
            <li>Proficient in <span className="font-semibold">C, C++, Python, JavaScript</span></li>
            <li>Experienced with <span className="font-semibold">MERN Stack, Flutter, JavaFx</span></li>
          </ul>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-3xl text-blue-500 dark:text-blue-400 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Experience</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Mobile Application Developer Intern at <span className="font-semibold">Battery Low Initiative</span>
          </p>
        </motion.div>

        {/* Mission Statement - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 col-span-1 md:col-span-2 lg:col-span-3"
        >
          <div className="flex items-center mb-4">
            <FaBullseye className="text-3xl text-blue-500 dark:text-blue-400 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Mission Statement</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            My mission is to leverage my expertise in machine learning engineering and web development to build
            intelligent, scalable, and impactful digital solutions. By blending data-driven decision-making with
            seamless user experiences, I aim to solve real-world problems across industries. I am dedicated to
            continuous learning, embracing emerging technologies, and pushing creative boundaries to exceed
            expectations and make a meaningful contribution to the evolving digital landscape.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
