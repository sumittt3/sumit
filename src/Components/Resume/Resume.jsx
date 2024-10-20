import React from "react";

export default function Resume() {
  const resumeUrl = "/dsf.pdf"; // Update the path if necessary

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume_Sumit_Kumar.pdf";
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          Resume
        </h1>

        <div className="mb-6">
          <iframe
            src={resumeUrl}
            title="Resume Preview"
            style={{width: "100%", height: "600px"}}
            frameBorder="0"
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
