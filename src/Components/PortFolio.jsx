import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaCode } from "react-icons/fa";

import java from "/images/java.png";
import python from "/images/python.webp";
import mongoDB from "/images/mongodb.jpg";
import express from "/images/express.png";
import reactjs from "/images/reactjs.png";
import nodejs from "/images/node.png";
import ML from "/images/ML.jpg";
import html from "/images/html.png";
import Flutter from "/images/Flutter.jpg";

const cardItem = [
  {
    id: 1,
    logo: ML,
    name: "Machine Learning",
    videoLink: "https://example.com/ml-video",
    sourceCodeLink: "https://github.com/anmzahid/TextSummarization-app",
  },
  {
    id: 2,
    logo: Flutter,
    name: "Flutter",
    videoLink: "https://youtu.be/tPPszF4eyYs?si=h2E5tL2vXbj1uPXs",
    sourceCodeLink: "https://github.com/anmzahid/e-book",
  },
  {
    id: 3,
    logo: reactjs,
    name: "ReactJS",
    videoLink: "https://youtu.be/J1uqQQtYseY?si=Pq4-kMi0c-n08okK",
    sourceCodeLink: "https://github.com/anmzahid/TradeAndTroves",
  },
  {
    id: 4,
    logo: nodejs,
    name: "NodeJS",
    videoLink: "https://example.com/nodejs-video",
    sourceCodeLink: "https://github.com/anmzahid/TradeAndTroves",
  },
  {
    id: 5,
    logo: python,
    name: "Python",
    videoLink: "https://example.com/python-video",
    sourceCodeLink: "https://github.com/anmzahid/DSP-Project",
  },
  {
    id: 6,
    logo: java,
    name: "Java",
    videoLink: "https://example.com/java-video",
    sourceCodeLink: "https://github.com/Brownbear2710/LYCEUM",
  },
  {
    id: 7,
    logo: html,
    name: "Html5 canvas & JS",
    videoLink: "https://youtu.be/sS_tOktyBss?si=5w4HDw_bkth0nSuw",
    sourceCodeLink: "https://github.com/anmzahid/MyFoemyX",
  },
  {
    id: 8,
    logo: express,
    name: "Express",
    videoLink: "https://example.com/express-video",
    sourceCodeLink: "https://github.com/anmzahid/TradeAndTroves",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      id="Portfolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900  px-6"
    >
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">Portfolio</h1>
      <span className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-6">Featured Projects</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardItem.map(({ id, logo, name, videoLink, sourceCodeLink }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
                      p-6 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700 overflow-hidden transition-transform"
          >
            <motion.img
              src={logo}
              alt={name}
              className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
              whileHover={{ scale: 1.1 }}
            />
            <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-2">{name}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">Explore the project details below.</p>

            <div className="flex justify-around mt-4">
              <a href={videoLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md"
                >
                  <FaPlay className="mr-2" /> Video
                </motion.button>
              </a>

              <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg shadow-md"
                >
                  <FaCode className="mr-2" /> Code
                </motion.button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
