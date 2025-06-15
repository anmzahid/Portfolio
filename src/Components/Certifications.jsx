import React from "react";
import { motion } from "framer-motion";

// Certification thumbnails (or placeholders)
import cert1 from "/Certifications/Coursera AdvLA-1.png";
import cert2 from "/Certifications/Coursera AdvLA-1.png";
import cert3 from "/Certifications/Datascientist-1.png";
import cert4 from "/Certifications/Coursera NLP-1.png"; // Add more if needed

const certificationsData = [
  {
    id: 1,
    title: "Supervised Machine Learning",
    imageUrl: cert1,
    link: "https://coursera.org/share/40a01b6e2faa4524142a807e6b123a12",
  },
  {
    id: 2,
    title: "Advanced Learning Algorithms",
    imageUrl: cert2,
    link: "https://coursera.org/share/0c2516add7d0fc7d7c4caea6d36337f9",
  },
  {
    id: 3,
    title: "Data Scientist Certificate - DataCamp",
    imageUrl: cert3,
    link: "https://www.datacamp.com/certificate/DS0020392606135",
  },
  {
    id: 4,
    title: "Natural Language Processing - DeepLearning.AI",
    imageUrl: cert4,
    link: "https://coursera.org/share/96f618598260d4f2c9710fe8bdd002e0",
  },
];

const Certifications = () => {
  return (
    <motion.div
      name="Certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      // Matching Home bg gradient + padding + rounded corners
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-24 
                 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 rounded-lg"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-5 text-blue-500 dark:text-blue-400"
      >
        Certifications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="font-semibold text-xl text-gray-700 dark:text-gray-300"
      >
        Here's a glimpse of my completed certifications from top platforms.
      </motion.p>

      {/* Certification Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 my-6"
      >
        {certificationsData.map(({ id, imageUrl, title, link }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * id, duration: 0.5 }}
            className="flex flex-col items-center justify-center border-2 border-blue-500 rounded-lg shadow-lg p-4 
                       hover:scale-105 duration-300 
                       bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
          >
            <img
              src={imageUrl}
              className="w-full h-40 object-cover rounded-md"
              alt={title}
            />
            <div className="mt-4 text-center text-gray-700 dark:text-gray-300 font-semibold">
              {title}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
