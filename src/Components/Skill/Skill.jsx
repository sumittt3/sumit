import React from "react";

// SkillBar component to display skills with descriptions
const SkillBar = ({skill, description}) => {
  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg text-gray-800">{skill}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function Skill() {
  // Skills with descriptions in the specified order
  const skills = [
    {
      name: "C",
      description:
        "Learning C provided a strong foundation in programming concepts. Understanding memory management and pointers has been crucial in my development journey and problem-solving endeavors.",
    },
    {
      name: "C++ (DSA)",
      description:
        "I delved into C++ to master data structures and algorithms. Online problem-solving platforms have sharpened my skills, fostering a love for logical thinking and coding challenges.",
    },
    {
      name: "HTML",
      description:
        "I learned HTML by building my first websites, focusing on structure and semantics. The satisfaction of creating visually appealing layouts fueled my passion for web development.",
    },
    {
      name: "CSS",
      description:
        "CSS styles web pages and enhances visual aesthetics. I enjoy experimenting with frameworks like Tailwind CSS to improve design efficiency and create responsive layouts.",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript enables dynamic content and interactive web applications. I love tackling online coding challenges that improve my understanding of programming concepts and enhance user experiences.",
    },
    {
      name: "PHP",
      description:
        "PHP was my introduction to server-side scripting. Developing dynamic web pages reinforced my understanding of how backend systems interact with front-end technologies.",
    },
    {
      name: "SQL",
      description:
        "I learned SQL to manage and query relational databases effectively. Engaging with online challenges has strengthened my skills in data manipulation and analysis.",
    },
    {
      name: "React",
      description:
        "I embraced React for its component-based architecture, allowing me to build scalable applications. Learning through projects has deepened my appreciation for clean, maintainable code.",
    },
    {
      name: "Node.js",
      description:
        "Node.js opened the door to backend development for me. Building RESTful APIs and server-side applications sparked my interest in full-stack development, encouraging me to solve real-world problems.",
    },
    {
      name: "MongoDB",
      description:
        "I explored MongoDB while integrating it with my Node.js applications. The flexibility of a NoSQL database inspired me to create dynamic applications that adapt to user needs.",
    },
    {
      name: "Tailwind CSS",
      description:
        "Tailwind CSS revolutionized my approach to styling. Its utility-first approach allows for rapid prototyping and customization, making design both efficient and enjoyable.",
    },
    {
      name: "Git",
      description:
        "I use Git for version control to manage my projects efficiently. Understanding branching, merging, and collaborating with others through platforms like GitHub has significantly enhanced my workflow.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          Skills
        </h1>

        <div>
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.name}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
