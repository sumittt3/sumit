import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTheme } from "../../Layout";

export default function Footer() {
  const { theme } = useTheme();
  const themeClasses = {
    dark: {
      bg: 'bg-black',
      border: 'border-gray-700',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      hover: 'hover:text-white'
    },
    light: {
      bg: 'bg-white',
      border: 'border-gray-200',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      hover: 'hover:text-blue-600'
    }
  };

  return (
    <footer className={`${themeClasses[theme].bg} ${themeClasses[theme].border} border-t py-12`}>
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`self-center text-3xl font-bold ${themeClasses[theme].text} transition duration-300`}
            >
              Sumit
            </motion.span>
            <p className={`${themeClasses[theme].textSecondary} mt-2`}>Building Stuff on the Internet</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className={`mb-4 text-lg font-semibold ${themeClasses[theme].text} uppercase tracking-wide`}>
                Navigate
              </h2>
              <ul className={`${themeClasses[theme].textSecondary} space-y-2`}>
                <li>
                  <button
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                  >
                    Experience
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`mb-4 text-lg font-semibold ${themeClasses[theme].text} uppercase tracking-wide`}>
                Connect
              </h2>
              <ul className={`${themeClasses[theme].textSecondary} space-y-2`}>
                <li>
                  <a
                    href="https://github.com/THAKURSUMIT1600"
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1 flex items-center`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sumit-thakurr3/"
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1 flex items-center`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`mb-4 text-lg font-semibold ${themeClasses[theme].text} uppercase tracking-wide`}>
                Contact
              </h2>
              <ul className={`${themeClasses[theme].textSecondary} space-y-2`}>
                <li>
                  <a
                    href="mailto:sumitthakur1600@gmail.com"
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1 flex items-center`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className={`${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                  >
                    Get In Touch
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={`my-8 ${themeClasses[theme].border}`} />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className={`text-sm ${themeClasses[theme].textSecondary} sm:text-center`}>
            © 2026 Sumit. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 items-center">
            <span className={`${themeClasses[theme].textSecondary} text-sm flex items-center`}>
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Sumit
            </span>
            <div className="flex space-x-4">
              <a
                href="https://github.com/THAKURSUMIT1600"
                className={`${themeClasses[theme].textSecondary} ${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-thakurr3/"
                className={`${themeClasses[theme].textSecondary} ${themeClasses[theme].hover} transition duration-300 transform hover:-translate-y-1`}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
