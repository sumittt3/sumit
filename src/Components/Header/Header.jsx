import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-700 shadow-lg"
    >
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="self-center text-2xl font-bold text-white transition duration-300"
            >
              Sumit
            </motion.span>
          </button>
          <div className="hidden lg:flex lg:order-2">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-white"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300 font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none transition duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 bg-gray-900/95 backdrop-blur-lg rounded-lg p-4 border border-gray-700"
          >
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 w-full text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 w-full text-left"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 w-full text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="block text-gray-300 hover:text-white font-medium py-2 px-4 transition duration-300 w-full text-left"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300 font-medium w-full text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

