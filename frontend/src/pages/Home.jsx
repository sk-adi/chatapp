import React from "react";
import { Navigate } from "react-router-dom";
import selfieDoodle from "../assets/images/SelfieDoodle.svg"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl p-6 md:p-12">
        
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Say Hi to <span className="text-teal-400">Someone New</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Feeling bored? <br /> Connect with a new friend and start chatting instantly.
          </p>
          <a href="/register">
            <button className="cursor-pointer mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white text-lg font-semibold shadow-md">
              Connect me!
            </button>
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={selfieDoodle}
            alt="Chat Illustration"
            className="w-64 md:w-96 h-full md:h-80 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
