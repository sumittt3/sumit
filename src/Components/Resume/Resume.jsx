import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";

export default function Resume() {
  const resumeUrl = "/Sumit.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume_Sumit.pdf";
    link.click();
  };

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
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Sumit</h2>
            <p className="text-xl text-orange-400 mb-4">Full-Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Chandigarh, India</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/THAKURSUMIT1600" className="text-orange-400 hover:text-orange-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sumit-thakurr3/" className="text-orange-400 hover:text-orange-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://sumitthakur.vercel.app" className="text-orange-400 hover:text-orange-300">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-orange-400 pb-2">Education</h3>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white">B.E. Computer Science and Engineering</h4>
              <p className="text-orange-400">Chandigarh College Of Engineering and Technology</p>
              <p className="text-gray-300">2022 – 2026 | CGPA: 7.92/10</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-orange-400 pb-2">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="text-lg font-semibold text-white">Software Developer</h4>
                <p className="text-orange-400">Entnt | Nov 2025 – Present</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Worked on the client project TDA, a comprehensive property management platform designed to streamline apartment showings, tenant appointments, and rental operations across multiple properties</li>
                  <li>• Implemented the complete Rented Apt workflow with a fully responsive UI, including apartment detail views, security deposit email flows, automated move-out instruction emails, and tenant lifecycle management</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="text-lg font-semibold text-white">Software Developer</h4>
                <p className="text-orange-400">Mobizo | June 2025 – Dec 2025</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Architected transportation-tech platform dashboards for customers, drivers, owners, and admins</li>
                  <li>• Led backend development with scalable, fault-tolerant MERN architectures, real-time data processing, and service integration, including both backend and frontend for the website and entire backend for the app</li>
                  <li>• Mentored interns, conducted code reviews, and enforced coding best practices as team lead</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="text-lg font-semibold text-white">Software Developer Intern</h4>
                <p className="text-orange-400">SparkScale India | Apr 2025 – Aug 2025</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Developed enterprise-grade web platforms using Next.js stack with optimized UI/UX and robust logic, working on various live projects including brand profile, hotel booking platform, and survey tool</li>
                  <li>• Built end-to-end Coffee Chemistry platform integrating APIs, authentication, and real-time synchronization</li>
                  <li>• Enhanced QR Tool with analytics dashboards, secure payment integration, and modular architecture</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="text-lg font-semibold text-white">Full Stack Developer Intern</h4>
                <p className="text-orange-400">BilvaLeaf Private Limited | Jan 2025 – Apr 2025</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Implemented various HRMS platform modules such as employee management, ticket management, leave management, project, historian blog module - history bell website integration, and project employee</li>
                  <li>• Implemented authentication, session management, and role-based access control for enterprise security</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="text-lg font-semibold text-white">Frontend Developer</h4>
                <p className="text-orange-400">Conatus Bharat | Nov 2024 - Jan 2025</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Built a new website for the platform, focusing on creating a modern, responsive, and user-friendly interface</li>
                  <li>• Designed and implemented interactive UI components using React.js, ensuring seamless functionality across devices</li>
                  <li>• Collaborated with backend developers to integrate APIs, optimize performance, and enhance user experience</li>
                  <li>• Worked on improving cross-browser compatibility, debugging issues, and maintaining clean code using Git and GitHub</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h4 className="text-lg font-semibold text-white">Web Designer</h4>
                <p className="text-orange-400">Enlightos | Oct 2024 - Dec 2024</p>
                <ul className="text-gray-300 mt-2 space-y-1">
                  <li>• Brought Enlightos to the Substack platform, focusing on building an engaging and user-friendly interface within the platform's constraints</li>
                  <li>• Improved the primary Enlightos website on Hostinger, enhancing responsiveness, optimizing speed, and refining the overall user experience across devices</li>
                  <li>• Used Canva and Figma to generate graphic elements and prototypes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-orange-400 pb-2">Projects</h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white">Coffee Chemistry</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">NextAuth.js</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Prisma</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">PostgreSQL</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">LocalStorage</span>
                </div>
                <p className="text-gray-300">Production-grade e-commerce platform with OTP-based Google Sign-In, real-time cart synchronization, and automated stock validation.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white">QuestionCraft</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">MongoDB</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Express.js</span>
                </div>
                <p className="text-gray-300">Full-stack exam management platform with auto-generate exams, secure student modules, and performance monitoring.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white">HopIn – Ride Booking Platform</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">MERN</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Leaflet</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Socket.io</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">JWT</span>
                  <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                </div>
                <p className="text-gray-300">Ride-booking platform with real-time GPS tracking, in-app messaging, and OTP-based verification.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-orange-400 pb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Programming Languages</h4>
                <p className="text-gray-300">JavaScript, TypeScript, C++, C, Java, HTML, CSS, SQL</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Frameworks & Libraries</h4>
                <p className="text-gray-300">React.js, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap, shadcn/ui, Socket.IO</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Databases</h4>
                <p className="text-gray-300">MongoDB, MySQL, PostgreSQL, Redis</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Tools & Platforms</h4>
                <p className="text-gray-300">Git, GitHub, VS Code, Postman, AWS, Firebase, Docker, Figma</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-orange-400 pb-2">Achievements</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• 1st Place – IPD Expo 2024: Presented QuestionCraft platform</li>
              <li>• 2nd Place – College Website Team Selection</li>
              <li>• 340+ problems solved on LeetCode</li>
              <li>• Active open-source contributor and mentor</li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition duration-300 flex items-center space-x-2 text-lg font-semibold"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume PDF</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
