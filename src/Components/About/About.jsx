import React from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Heart, Code, Mail, Briefcase, Award } from "lucide-react";

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-900/20 to-black/20 animate-pulse"></div>
      
      <div ref={ref} className="relative z-10 p-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">About Me</h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Hi, I'm a student developer who loves breaking things just to figure out how to fix them usually with JavaScript and problem-solving. I build web apps that work on the first try (most of the time). Full-stack dreams, MERN stack fueled nights, and lots of debugging sessions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            React and Node.js are my daily tools, and I'm currently exploring the backend world where APIs go to multiply. When I'm not coding, I'm either grinding LeetCode, contributing to open-source, or explaining to my friends why 'it works on my machine' is totally valid. I love creating stuff that's functional, scalable, and maybe a little innovative.
          </p>
          <div className="mt-6">
            <span className="text-orange-400 font-semibold">Chandigarh, Punjab</span>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Education</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">B.E. Computer Science and Engineering</h3>
            <p className="text-gray-300">Chandigarh College Of Engineering and Technology</p>
            <p className="text-gray-300">CGPA: 7.92/10 | 2022 – 2026</p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Achievements</h2>
          </div>
          <ul className="text-gray-300 space-y-2">
            <li>• 1st Place – IPD Expo 2024: Presented QuestionCraft platform for innovative exam management solution</li>
            <li>• 2nd Place – College Website Team Selection: Led development of official college website</li>
            <li>• 340+ problems solved on competitive programming across LeetCode</li>
            <li>• Mentored junior developers and taught coding best practices in team settings</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Full-Stack Developer (Projects)</h3>
              <p className="text-gray-300">2023 - Present</p>
              <p className="text-gray-300 mt-2">
                Developed multiple production-grade applications including e-commerce platforms, exam management systems, and ride-booking platforms. Led end-to-end development using MERN stack, Next.js, and various modern technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Open Source Contributor</h3>
              <p className="text-gray-300">2022 - Present</p>
              <p className="text-gray-300 mt-2">
                Active contributor to open-source projects, focusing on web development tools and educational platforms. Collaborated with global developers to improve code quality and user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Freelance Developer</h3>
              <p className="text-gray-300">2023 - Present</p>
              <p className="text-gray-300 mt-2">
                Provided freelance web development services, delivering custom solutions for clients. Managed project lifecycles from concept to deployment, ensuring high-quality results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hobbies and Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Hobbies & Interests</h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Outside of my studies, I enjoy going to the gym, focusing on building
            my physical fitness and well-being. I believe maintaining a healthy
            lifestyle is essential. Additionally, I prioritize mental health through
            mindfulness practices. In my downtime, I love watching movies across
            various genres and listening to music, which serve as sources of
            inspiration and relaxation.
          </p>
        </motion.div>

        {/* What I Love */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
        >
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">What I Love</h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            I have a deep passion for{" "}
            <strong className="text-orange-400">web development</strong> and a
            strong love for{" "}
            <strong className="text-orange-400">problem-solving</strong>. The
            ability to create dynamic and interactive websites fascinates me.
            I enjoy exploring various web technologies, from HTML and CSS to
            JavaScript frameworks. What excites me most is tackling real-world
            challenges and improving user experiences.
          </p>
        </motion.div>

        {/* Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          <div className="flex items-center mb-6">
            <Mail className="w-8 h-8 text-orange-400 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Feel free to reach out for opportunities or collaborations. I'm always
            open to discussing new projects and connecting with fellow tech enthusiasts!
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:your.email@example.com"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
