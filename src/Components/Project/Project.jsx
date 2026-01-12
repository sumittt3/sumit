import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, GitCommit, Star, GitFork } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const formatProjectName = (name) => {
    return name
      .replace(/_/g, " ")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
    >
      <h2 className="text-xl font-semibold text-white mb-2">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition duration-300"
        >
          {formatProjectName(project.name)}
        </a>
      </h2>
      <p className="text-gray-300 mb-4">
        {project.description || "No description available."}
      </p>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center text-gray-300">
          <Star className="w-4 h-4 mr-1" />
          {project.stargazers_count}
        </div>
        <div className="flex items-center text-gray-300">
          <GitFork className="w-4 h-4 mr-1" />
          {project.forks_count}
        </div>
      </div>
      <div className="flex space-x-4">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-orange-400 hover:text-orange-300 transition duration-300"
        >
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-orange-400 hover:text-orange-300 transition duration-300"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ContributionCard = ({ contribution, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
    >
      <div className="flex items-center mb-4">
        <GitCommit className="w-6 h-6 text-orange-400 mr-3" />
        <h3 className="text-xl font-semibold text-white">{contribution.title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{contribution.description}</p>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-300">
          <Github className="w-4 h-4 mr-1" />
          {contribution.repo}
        </div>
        <div className="flex items-center text-gray-300">
          <GitCommit className="w-4 h-4 mr-1" />
          {contribution.commits} commits
        </div>
      </div>
    </motion.div>
  );
};

export default function Project() {
  const [projects, setProjects] = useState([]);
  const githubUsername = "THAKURSUMIT1600";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/starred`
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const orderedProjects = [
    "Question_Craft-Examination-System",
    "website-notices",
    "Blogify",
    "Currency_Convertor",
    "TodoEase",
    "Password-Generator",
  ];

  const orderedProjectList = orderedProjects
    .map((name) => projects.find((project) => project.name === name))
    .filter(Boolean);

  const remainingProjects = projects.filter(
    (project) => !orderedProjects.includes(project.name)
  );

  const sortedProjects = [...orderedProjectList, ...remainingProjects];

  // Sample contributions data - in a real app, fetch from GitHub API
  const contributions = [
    {
      title: "Enhanced React Component Library",
      description: "Added new components and improved accessibility features.",
      repo: "react-components-lib",
      commits: 15
    },
    {
      title: "Fixed Bug in Authentication Module",
      description: "Resolved security vulnerability in login system.",
      repo: "auth-module",
      commits: 8
    },
    {
      title: "Documentation Improvements",
      description: "Updated README and added API documentation.",
      repo: "web-framework",
      commits: 12
    }
  ];

  // Featured Projects from LinkedIn
  const featuredProjects = [
    {
      name: "Coffee Chemistry",
      description: "Developed a production-grade e-commerce platform with OTP-based Google Sign-In. Implemented real-time cart/wishlist synchronization and dynamic GST calculation for multi-device support. Designed real-time inventory and cart management with automated stock validation.",
      tech: "Next.js, NextAuth.js, Prisma, PostgreSQL, LocalStorage",
      live: "https://coffee-chemistry.vercel.app/",
      github: "https://github.com/THAKURSUMIT1600/coffee-chemistry"
    },
    {
      name: "QuestionCraft",
      description: "Built full-stack exam management platform enabling teachers to manage question banks. Implemented auto-generate exams and monitor student performance. Developed secure student modules with code-based access, dynamic render, and auto-submit functionality.",
      tech: "React, Node.js, MongoDB, Express.js",
      live: "https://questioncraft.vercel.app/",
      github: "https://github.com/THAKURSUMIT1600/Question_Craft-Examination-System"
    },
    {
      name: "HopIn – Ride Booking Platform",
      description: "Created a MERN-based ride-booking platform with real-time GPS tracking and fare estimation. Integrated vehicle options, in-app messaging, and OTP-based ride verification. Integrated Socket.io for real-time communication and JWT for secure authentication.",
      tech: "MERN, Leaflet, Socket.io, JWT, Tailwind CSS",
      live: "https://hopin-ride.vercel.app/",
      github: "https://github.com/THAKURSUMIT1600/hopin-ride-booking"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-900/20 to-black/20 animate-pulse"></div>
      
      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white mb-12 text-center"
        >
          Projects & Contributions
        </motion.h1>

        {/* Featured Projects */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-semibold text-white mb-8"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(', ').map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-400 hover:text-orange-300 transition duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-400 hover:text-orange-300 transition duration-300"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-semibold text-white mb-8"
        >
          Open Source Contributions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((contribution, index) => (
            <ContributionCard key={index} contribution={contribution} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
