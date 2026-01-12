import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Palette,
  GitBranch,
  FileText,
  Zap,
  Globe
} from "lucide-react";

const SkillCard = ({ skill, icon: Icon, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg hover:border-orange-400/50 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-orange-400 mb-3 group-hover:text-orange-300 transition-colors" />
        <h3 className="text-white font-medium text-sm">{skill}</h3>
      </div>
    </motion.div>
  );
};

export default function Skill() {
  const skills = [
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "C++", icon: Code },
    { name: "C", icon: Code },
    { name: "Java", icon: Code },
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Palette },
    { name: "SQL", icon: Database },
    { name: "React.js", icon: Zap },
    { name: "Next.js", icon: Zap },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Bootstrap", icon: Palette },
    { name: "shadcn/ui", icon: Palette },
    { name: "Socket.IO", icon: Zap },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Redis", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitBranch },
    { name: "VS Code", icon: FileText },
    { name: "Postman", icon: FileText },
    { name: "AWS", icon: Server },
    { name: "Firebase", icon: Server },
    { name: "Docker", icon: Server },
    { name: "Figma", icon: Palette },
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
          Technical Skills
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
