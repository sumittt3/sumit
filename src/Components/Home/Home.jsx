import React from "react";
import {Link} from "react-router-dom";
import {TypeAnimation} from "react-type-animation";

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <div
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center p-6"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80)`, // HD quality image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold text-white mb-4 text-center animate-fadeIn">
          Hello, I'm{" "}
          <TypeAnimation
            sequence={[
              "a Coder.",
              1000,
              "a Software Developer.",
              2000,
              "a Web Developer.",
              2000,
              "a Tech Enthusiast.",
              2000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{fontSize: "1em", display: "inline-block"}}
          />
        </h1>
        <p className="text-lg text-white mb-8 text-center max-w-2xl animate-fadeIn">
          A journey through technology and creativity.
        </p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 animate-fadeIn">
          <Link
            to="/projects"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300 text-center w-full md:w-auto"
          >
            View Projects
          </Link>
          <Link
            to="/skills"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 text-center w-full md:w-auto"
          >
            My Skills
          </Link>
        </div>
      </div>
    </div>
  );
}
