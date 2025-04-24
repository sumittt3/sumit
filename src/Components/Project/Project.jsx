import React, {useEffect, useState} from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const githubUsername = "THAKURSUMIT1600"; // Your GitHub username

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

  // Specify the projects to display first
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
    .filter(Boolean); // Remove undefined values

  const remainingProjects = projects.filter(
    (project) => !orderedProjects.includes(project.name)
  );

  const sortedProjects = [...orderedProjectList, ...remainingProjects];

  const formatProjectName = (name) => {
    return name
      .replace(/_/g, " ")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatProjectName(project.name)}
                </a>
              </h2>
              <p className="text-gray-600 mb-2">
                {project.description || "No description available."}
              </p>

              <p className="text-gray-500">
                🔗{" "}
                <a
                  href={`https://github.com/${githubUsername}/${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
