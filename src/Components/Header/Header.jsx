import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-6 transition duration-300 ease-in-out">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-3xl font-bold text-gray-800 transition duration-300 transform hover:scale-105">
              Sumit Thakur
            </span>
          </Link>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-orange-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 lg:w-auto w-full mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4 lg:space-y-0">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `text-gray-800 hover:text-orange-600 font-medium py-2 px-4 transition duration-300 ease-in-out ${
                      isActive ? "border-b-2 border-orange-600" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-gray-800 hover:text-orange-600 font-medium py-2 px-4 transition duration-300 ease-in-out ${
                      isActive ? "border-b-2 border-orange-600" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `text-gray-800 hover:text-orange-600 font-medium py-2 px-4 transition duration-300 ease-in-out ${
                      isActive ? "border-b-2 border-orange-600" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `text-gray-800 hover:text-orange-600 font-medium py-2 px-4 transition duration-300 ease-in-out ${
                      isActive ? "border-b-2 border-orange-600" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `text-gray-800 hover:text-orange-600 font-medium py-2 px-4 transition duration-300 ease-in-out ${
                      isActive ? "border-b-2 border-orange-600" : ""
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

