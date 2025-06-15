import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-10 mt-12 shadow-inner">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <div className="flex space-x-6 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>

            {/* Divider and Copyright */}
            <div className="border-t border-gray-400 dark:border-gray-600 w-full pt-6 text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                &copy; 2024 <span className="font-semibold">A N M Zahid</span>. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Supportive Partner ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
