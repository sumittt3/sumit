import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  FileText,
  MapPin,
  Globe,
  Terminal,
  Database,
  Server,
  Palette,
  GitBranch,
  Zap,
  Sun,
  Moon,
  Sparkles,
  Coffee,
  Cpu,
  Monitor,
  Smartphone,
  Cloud,
  Container,
  Send,
  Layers,
  Atom,
  Braces,
  Hash,
  FileCode,
  DatabaseZap,
  Shield,
  Workflow
} from "lucide-react";
import { useTheme } from "../../Layout";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const { theme, setTheme } = useTheme();
  const githubUsername = "THAKURSUMIT1600";

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos`
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const skills = [
  // Programming Languages
  { name: "JavaScript", icon: Braces, category: "Languages" },
  { name: "TypeScript", icon: FileCode, category: "Languages" },
  { name: "C++", icon: Cpu, category: "Languages" },
  { name: "C", icon: Cpu, category: "Languages" },
  { name: "Java", icon: Coffee, category: "Languages" },
  { name: "HTML", icon: Hash, category: "Languages" },
  { name: "CSS", icon: Palette, category: "Languages" },
  { name: "SQL", icon: Database, category: "Languages" },
  
  // Frontend
  { name: "React.js", icon: Atom, category: "Frontend" },
  { name: "Next.js", icon: Layers, category: "Frontend" },
  { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
  { name: "Bootstrap", icon: Monitor, category: "Frontend" },
  { name: "shadcn/ui", icon: Layers, category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "Express.js", icon: Workflow, category: "Backend" },
  { name: "Socket.IO", icon: Zap, category: "Backend" },
  { name: "Prisma", icon: DatabaseZap, category: "Backend" },
  { name: "JWT", icon: Shield, category: "Backend" },
  
  // Databases
  { name: "MongoDB", icon: Database, category: "Databases" },
  { name: "MySQL", icon: Database, category: "Databases" },
  { name: "PostgreSQL", icon: Database, category: "Databases" },
  { name: "Redis", icon: Database, category: "Databases" },
  
  // Tools & Platforms
  { name: "Git", icon: GitBranch, category: "Tools" },
  { name: "GitHub", icon: Github, category: "Tools" },
  { name: "VS Code", icon: Code, category: "Tools" },
  { name: "Postman", icon: Send, category: "Tools" },
  { name: "AWS", icon: Cloud, category: "Tools" },
  { name: "Firebase", icon: DatabaseZap, category: "Tools" },
  { name: "Docker", icon: Container, category: "Tools" },
  { name: "Figma", icon: Palette, category: "Tools" },
];
  const featuredProjects = [
    {
      name: "Mobizo",
      description: "Built complete web platform from ground up as first developer. Designed and developed entire website and backend systems supporting mobile applications. Led technical direction, collaborated with stakeholders, and scaled development team.",
      tech: "MERN Stack, React, Node.js, MongoDB, Express.js",
      company: "Mobizo",
      duration: "July 2025 - January 2026"
    },
    {
      name: "Coffee Chemistry",
      description: "Developed a production-grade e-commerce platform featuring OTP-based Google Sign-In. Implemented real-time synchronization for carts and wishlists across multiple devices. Engineered dynamic GST calculation and real-time inventory management with automated stock validation.",
      tech: "Next.js, NextAuth.js, Prisma, PostgreSQL, LocalStorage",
      company: "SparkScale India",
      duration: "April 2025 - August 2025"
    },
    {
      name: "Hopin",
      description: "Created a ride booking platform featuring real-time GPS tracking and fare estimation using Leaflet and Socket.io. Integrated vehicle options, in-app messaging, and secure OTP-based ride verification. Implemented JWT for secure authentication.",
      tech: "MERN Stack",
      company: "Personal Project",
      duration: "April 2025 - August 2025"
    },
    {
      name: "Question Craft",
      description: "Built a full-stack exam management platform that allows teachers to manage question banks and auto-generate exams. Developed secure student modules with code-based access, dynamic rendering, and auto-submit functionality. Awarded 1st Place at the IPD Expo 2024 for this innovative solution.",
      tech: "React, Node.js, MongoDB, Express.js",
      company: "Personal Project",
      duration: "April 2025 - August 2025"
    },
    {
      name: "HRMS Management System",
      description: "Developed comprehensive HRMS platform at Bilvaleaf with modules for employee management, ticket management, leave management, project management, and historian blog. Implemented authentication, session management, and role-based access control.",
      tech: "React, Express.js, Node.js, SQL",
      company: "Bilvaleaf Private Limited",
      duration: "January 2025 - May 2025"
    },
    {
      name: "Hotel Booking Website",
      description: "Developed a comprehensive hotel booking platform with reservation management, payment integration, and user-friendly booking interface. Implemented search functionality, availability checking, and booking confirmation systems.",
      tech: "Next.js, React, Node.js, MongoDB, Payment Integration",
      company: "SparkScale India",
      duration: "April 2025 - August 2025"
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sumit.pdf";
    link.download = "Resume_Sumit.pdf";
    link.click();
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeClasses = {
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      card: 'bg-gray-900',
      accent: 'text-orange-400',
      button: 'bg-orange-500 hover:bg-orange-600'
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      card: 'bg-white shadow-xl',
      accent: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700'
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${themeClasses[theme].bg} ${themeClasses[theme].text}`}>

      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${themeClasses[theme].button} text-white`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>
      {/* Hero Section */}
      <section id="hero" className={`min-h-screen flex flex-col md:flex-row items-center px-4 py-20 relative z-10 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left max-w-2xl mb-12 md:mb-0 order-2 md:order-1"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className={`w-32 h-32 mx-auto md:mx-0 mb-8 rounded-full items-center justify-center hidden md:flex ${theme === 'dark' ? 'bg-gradient-to-br from-orange-400 to-pink-500' : 'bg-gradient-to-br from-blue-400 to-purple-500'}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Sparkles className={`w-16 h-16 ${theme === 'dark' ? 'text-white' : 'text-white'}`} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sumit</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`text-lg md:text-xl lg:text-2xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            <TypeAnimation
              sequence={[
                "Software Developer ",
                2000,
                "Engineering @Entnt",
                2000,

                "Backend Development",
                2000,
                "Full-Stack Developer",
                2000,
                "Final Year CS Student",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0"
          >
            Aspiring Software Developer | Final Year CSE Student | C++ • DSA • MERN Stack • Next.js • TypeScript • Backend Development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
          >
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className={`${theme === 'dark' ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-blue-600 text-white hover:bg-blue-700'} px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 focus:ring-0`}
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className={`${theme === 'dark' ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-blue-600 text-white hover:bg-blue-700'} px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 focus:ring-0`}
            >
              View My Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex space-x-6 justify-center md:justify-start"
          >
            <a
              href="https://github.com/THAKURSUMIT1600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-thakurr3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center items-center mt-8 md:mt-0 order-1 md:order-2"
        >
          <img
            src={theme === 'dark' ? '/sumit.png' : '/sumitlight.png'}
            alt="Sumit"
            className="w-80 h-80 md:w-full md:h-full object-cover shadow-2xl rounded-[30%_70%_44%_56%_/_45%_30%_70%_55%]"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}>
                <div className="flex items-center mb-4">
                  <Code className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                  <h3 className="text-2xl font-semibold">About Me</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
                  Hi! I'm a passionate and driven final-year Computer Science student actively preparing for Software Developer roles. I specialize in C++ and Data Structures & Algorithms, and I'm also expanding my skills in Full Stack Development using the MERN stack, Next.js, and TypeScript, with a focus on Backend Development and System Design.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
                  What sets me apart is my strong problem-solving mindset, a solid foundation in core CS subjects (like OS, DBMS, OOPs), and my commitment to continuous learning. I enjoy building logic, writing clean and efficient code, and creating modern web applications that provide optimized user experiences.
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  As a fresher, I've worked on multiple academic and personal projects, including web apps built with React, Node.js, MongoDB, and other modern technologies. Alongside development, I actively sharpen my DSA and problem-solving skills through coding challenges and mock interviews.
                </p>
                <div className={`mt-4 p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg`}>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold`}>Currently seeking:</p>
                  <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mt-2 space-y-1`}>
                    <li>• SDE Internships</li>
                    <li>• Entry-level Software Developer roles</li>
                    <li>• Opportunities to learn, contribute, and grow in a tech-driven environment</li>
                  </ul>
                </div>
              </div>

              <div className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}>
                <div className="flex items-center mb-4">
                  <GraduationCap className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Education</h3>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold ${themeClasses[theme].text}`}>B.E. Computer Science and Engineering</h4>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Chandigarh College Of Engineering and Technology</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>CGPA: 8/10 | 2022 – 2026</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}>
                <div className="flex items-center mb-4">
                  <Award className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Achievements</h3>
                </div>
                <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                  <li>• 1st Place – IPD Expo 2024: Presented QuestionCraft platform</li>
                  <li>• 2nd Place – College Website Team Selection</li>
                  <li>• 340+ problems solved on LeetCode</li>
                  <li>• Mentored junior developers and taught coding best practices</li>
                </ul>
              </div>

              <div className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}>
                <div className="flex items-center mb-4">
                  <Heart className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Hobbies & Interests</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  Outside of my studies, I enjoy going to the gym, focusing on building my physical fitness and well-being. I believe maintaining a healthy lifestyle is essential. Additionally, I prioritize mental health through mindfulness practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Technical Skills
          </motion.h2>

          {/* Infinite Horizontal Scrolling Skills */}
          <div className="relative overflow-hidden py-8">
            <motion.div
              className="flex space-x-6"
              animate={isAnimating ? {
                x: [0, -206 * skills.length], // 206px per card (200px width + 6px gap)
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                },
              } : {}}
              onHoverStart={() => setIsAnimating(false)}
              onHoverEnd={() => setIsAnimating(true)}
            >
              {/* Duplicate skills for seamless loop */}
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.2, y: -10 }}
                  className={`${themeClasses[theme].card} p-4 rounded-lg border shadow-xl hover:shadow-2xl transition-all duration-300 group text-center min-w-[180px] flex-shrink-0`}
                >
                  <skill.icon className={`w-10 h-10 mb-3 mx-auto ${themeClasses[theme].accent} group-hover:scale-125 transition-transform`} />
                  <h3 className={`font-medium text-xs ${themeClasses[theme].text}`}>{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient overlays for smooth edges */}
            <div className={`absolute left-0 top-0 bottom-0 w-20 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900/50' : 'bg-gradient-to-r from-white/50'} to-transparent pointer-events-none z-10`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-20 ${theme === 'dark' ? 'bg-gradient-to-l from-gray-900/50' : 'bg-gradient-to-l from-white/50'} to-transparent pointer-events-none z-10`}></div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-current to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-current to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Projects Contributed
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className={`text-2xl font-semibold mb-2 ${themeClasses[theme].text}`}>{project.name}</h3>
                <div className={`flex items-center mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="font-medium">{project.company}</span>
                  <span className="mx-2">•</span>
                  <span>{project.duration}</span>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Junior Software Engineer</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>ENTNT | November 2025 – Present (3 months) | Abu Dhabi</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• Contributing to frontend and backend development using React, React Native, SQL, .NET, C#, and ASP.NET</li>
                <li>• Working on live projects by resolving issues and implementing new features</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Software Developer</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Mobizo | July 2025 – January 2026 (7 months)</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• As a Software Developer at Mobizo, I was the first developer hired and played a key role in building the entire web platform from the ground up</li>
                <li>• Responsible for designing and developing the complete website, as well as architecting and managing the backend systems that supported the mobile applications</li>
                <li>• Led the technical direction of the project, collaborated closely with stakeholders, and helped scale the development team</li>
                <li>• Took ownership of core features, made important architectural decisions, and continuously learned and grew both technically and as a team leader</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>College Website Team</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Chandigarh College of Engineering & Technology (Degree Wing), Panjab University | October 2024 – December 2025 (1 year 3 months)</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• Working as a college website team involves designing, developing, and maintaining the institution's website</li>
                <li>• Ensuring smooth navigation, regular updates, and secure database management</li>
                <li>• Responsibilities include UI/UX design, content management, and performance optimization</li>
                <li>• Collaboration with various departments is key to keeping the website informative and user-friendly</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Software Engineer Intern</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>SparkScale India | April 2025 – August 2025 (5 months)</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• During my experience working on projects like QR, Coffee Chemistry, Brand Profile, and the Survey Tool, I gained hands-on expertise in building and maintaining full-stack applications using Next.js and modern web technologies</li>
                <li>• Deepened my understanding of component-based architecture, dynamic routing, API development, and performance optimization</li>
                <li>• Working across different project scopes helped me become proficient in handling diverse technical challenges, such as managing complex state, ensuring responsive design, integrating third-party libraries, and implementing secure backend services</li>
                <li>• Collaborating with cross-functional teams enhanced my communication skills and taught me the importance of aligning development with business goals and user needs</li>
                <li>• Learned to work efficiently in agile environments, handle version control with Git, conduct thorough testing, and manage deployments</li>
                <li>• This experience significantly improved my problem-solving abilities, coding standards, and overall confidence in delivering scalable, user-centric web applications</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Full Stack Developer</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Bilvaleaf Private Limited | January 2025 – May 2025 (5 months)</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• As a Full Stack Developer at Bilvaleaf Private Limited, I worked on live client projects using the MERN Stack (React, Express, Node.js, SQL)</li>
                <li>• Developed and deployed full-stack applications tailored to client requirements</li>
                <li>• On the frontend, I built responsive and interactive UIs with React, while on the backend, I created and managed RESTful APIs using Express and Node.js</li>
                <li>• Wrote and optimized SQL queries for data management, ensuring high performance and security</li>
                <li>• Collaborated with cross-functional teams to deliver features on time, participated in code reviews, and resolved real-time issues during production</li>
                <li>• This hands-on experience gave me exposure to real-world business needs and helped me strengthen my end-to-end development skills</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Frontend Developer</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Conatus Bharat | November 2024 – January 2025 (3 months)</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• During my internship at Conatus Bharat, I had the opportunity to work on building a new website for our platform, focusing on creating a modern, responsive, and user-friendly interface</li>
                <li>• As a Frontend Developer, I designed and implemented interactive UI components using React.js, ensuring seamless functionality across devices</li>
                <li>• Collaborated with backend developers to integrate APIs, optimize performance, and enhance user experience</li>
                <li>• Worked on improving cross-browser compatibility, debugging issues, and maintaining clean code using Git and GitHub</li>
                <li>• This experience strengthened my skills in React.js, JavaScript, CSS, and UI/UX design, while also improving my problem-solving and teamwork abilities</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${themeClasses[theme].card} p-8 rounded-lg border shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className={`w-8 h-8 mr-3 ${themeClasses[theme].accent}`} />
                <div>
                  <h3 className={`text-2xl font-semibold ${themeClasses[theme].text}`}>Web Designer</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Enlightos | October 2024 – December 2024 (3 months)</p>
                </div>
              </div>
              <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-11`}>
                <li>• As a Web Design Intern at Enlightos, I was in charge of bringing Enlightos to the Substack platform, focusing on building an engaging and user-friendly interface within the platform's constraints</li>
                <li>• Improved the primary Enlightos website on Hostinger, enhancing responsiveness, optimizing speed, and refining the overall user experience across several devices</li>
                <li>• Used Canva and Figma to generate graphic elements and prototypes</li>
                <li>• This work allowed me to hone my talents in web design, frontend development, and problem-solving while adjusting to new platforms and tackling real-world obstacles</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-xl mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Ready to start your next project? Let's connect and build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${themeClasses[theme].card} p-6 rounded-lg border shadow-xl`}
            >
              <Mail className={`w-8 h-8 mx-auto mb-4 ${themeClasses[theme].accent}`} />
              <h3 className={`text-lg font-semibold mb-2 ${themeClasses[theme].text}`}>Email</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>sumitthakur1600@gmail.com</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${themeClasses[theme].card} p-6 rounded-lg border shadow-xl`}
            >
              <MapPin className={`w-8 h-8 mx-auto mb-4 ${themeClasses[theme].accent}`} />
              <h3 className={`text-lg font-semibold mb-2 ${themeClasses[theme].text}`}>Location</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Chandigarh, India</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-12"
          >
            <a
              href="https://github.com/THAKURSUMIT1600"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-thakurr3/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'} px-8 py-4 rounded-lg transition duration-300 flex items-center space-x-2 text-lg font-semibold mx-auto`}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
