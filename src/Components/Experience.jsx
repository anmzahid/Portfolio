import React from "react";
import { motion } from "framer-motion";
import node from "/images/node.png";
import css from "/images/css.jpg";
import Js from "/images/javascript.png";
import oracle from "/images/oracle.png";
import react from "/images/reactjs.png";
import flutter from "/images/Flutter.jpg";
import python from "/images/python.webp";
import ML from "/images/ML.jpg";

function Experience() {
  const experiencedTech = [
    { id: 1, logo: node, name: "Node.js" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: Js, name: "JavaScript" },
    { id: 4, logo: oracle, name: "OracleDB" },
    { id: 5, logo: react, name: "React.js" },
  ];

  const exploringTech = [
    { id: 1, logo: flutter, name: "Flutter" },
    { id: 2, logo: python, name: "Python" },
    { id: 3, logo: ML, name: "Machine Learning" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      name="Experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-24
      bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 "
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-blue-500 dark:text-blue-400"
      >
        Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg font-medium text-gray-700 dark:text-gray-500 mb-10"
      >
        I have over 2 years of experience working with the following technologies:
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 mb-16">
        {experiencedTech.map(({ id, logo, name }, index) => (
          <motion.div
            key={id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
                       p-6 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 overflow-hidden
                       cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <img src={logo} className="w-20 h-20 rounded-full" alt={name} />
            <p className="mt-4 text-center text-gray-800 dark:text-gray-200 font-semibold">
              {name}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg font-medium text-gray-700 dark:text-gray-500 mb-10"
      >
        I'm currently exploring and working on the following technologies:
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-7">
        {exploringTech.map(({ id, logo, name }, index) => (
          <motion.div
            key={id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
                       p-6 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 overflow-hidden
                       cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <img src={logo} className="w-20 h-20 rounded-full" alt={name} />
            <p className="mt-4 text-center text-gray-800 dark:text-gray-200 font-semibold">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
