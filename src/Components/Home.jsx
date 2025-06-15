import React from "react";
import { motion } from "framer-motion";
import dp from "/images/dp.jpg";
import { FaFacebook, FaLinkedin, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <motion.div
      name="Home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 
                 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 
                 rounded-xl shadow-lg py-10"
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-2/3 mt-12 md:mt-24 space-y-6 order-2 md:order-1"
        >
          <span className="text-xl text-gray-600 dark:text-gray-300">
            Welcome To My Feed
          </span>
          <div className="flex space-x-2 text-2xl md:text-4xl font-bold">
            <h1 className="text-gray-800 dark:text-gray-200">Hello, I'm a</h1>
            <ReactTyped
              className="text-blue-600"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p className="text-sm md:text-md text-justify text-gray-700 dark:text-gray-300">
            I am a passionate and driven Computer Science student with a strong interest in Natural Language Processing (NLP) and Human Computer Interaction (HCI) research, Machine Learning, and full stack development (ReactJs, MySQL, NodeJs). With a solid foundation in both frontend and backend technologies, I am eager to bring my skills to projects where I can contribute to exciting developments and continue to grow.
          </p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0"
          >
            <div className="space-y-2">
              <h1 className="font-bold text-center text-blue-600 dark:text-blue-400">
                Available on
              </h1>
              <ul className="flex space-x-5">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl hover:scale-125 text-cyan-800 dark:text-cyan-600 duration-200 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-blue-500 hover:scale-125 duration-200 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@anmzahid5685" target="_blank" rel="noopener noreferrer">
                    <IoLogoYoutube className="text-2xl text-red-600 hover:scale-125 duration-200 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anmzahid" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl text-gray-800 dark:text-gray-200 hover:scale-125 duration-200 cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1 className="font-bold text-center text-blue-600 dark:text-blue-400">
                Currently working on
              </h1>
              <div className="flex space-x-5">
                <SiMongodb className="text-2xl md:text-3xl text-green-500 hover:scale-125 duration-200 cursor-pointer" />
                <SiExpress className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 hover:scale-125 duration-200 cursor-pointer" />
                <FaReact className="text-2xl md:text-3xl text-blue-500 hover:scale-125 duration-200 cursor-pointer" />
                <FaNodeJs className="text-2xl md:text-3xl text-green-400 hover:scale-125 duration-200 cursor-pointer" />
              </div>
            </div>
          </motion.div>

          {/* Research Interest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6"
          >
            <h1 className="font-bold text-center text-blue-600 dark:text-blue-400">
              Research Interest
            </h1>
            <div className="text-center text-gray-700 dark:text-gray-300">
              <h2>Abstractive Text Summarization</h2>
              <h2>LLM Watermarking on Bangla text</h2>
              <h2>AI-powered support for individuals with hearing impairments</h2>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section (Profile Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="md:w-1/3 md:ml-12 md:mt-20 mt-8 order-1"
        >
          <img
            src={dp}
            className="rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
            alt="Profile"
          />
        </motion.div>
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />
    </motion.div>
  );
}

export default Home;
