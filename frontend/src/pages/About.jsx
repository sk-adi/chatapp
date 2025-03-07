import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-gray-100">
      {/* About Section */}
      <div className="flex flex-col items-center w-full max-w-4xl px-6 md:px-12 py-12 text-center">
        
        {/* App Introduction */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600">
          About <span className="text-teal-500">Our Chat App</span>
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          Our chat app lets you instantly connect with new people around the world.  
          Whether you're looking for a fun conversation or just want to pass the time,  
          our app provides a safe, fast, and easy way to start chatting!
        </p>

        {/* Why Use It? */}
        <div className="mt-6 space-y-4 text-left">
          <ul className="list-disc pl-6">
            <li className="text-gray-300 text-lg">
              Instant Matching – Connect with someone in seconds.
            </li>
            <li className="text-gray-300 text-lg">
              Light & Simple UI – Built for smooth, distraction-free conversations.
            </li>
          </ul>
        </div>

        {/* Developer Info */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-teal-500">About the Developer</h2>
          <p className="text-gray-300 mt-2">
            Made by Aditya Kumar, a passionate full-stack developer.
          </p>
          <a
            href="https://github.com/sk-adi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white text-lg font-semibold shadow-md"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
