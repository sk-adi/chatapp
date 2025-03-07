import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      {/* Contact Section */}
      <div className="flex flex-col items-center w-full max-w-4xl px-6 md:px-12 py-12 text-center">
        
        {/* Contact Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400">
          Contact <span className="text-teal-500">Us</span>
        </h1>
        <p className="text-white text-lg mt-4">
          We'd love to hear from you! Whether you have questions or feedback, feel free to reach out.
        </p>

        {/* Contact Form */}
        <div className="mt-8 w-full max-w-lg">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-left text-white">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left text-white">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-left text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-2 px-4 py-3 border border-gray-300 rounded-lg w-full text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white text-lg font-semibold shadow-md">
              Send Message
            </button>
          </form>
        </div>

        {/* Developer Info */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-teal-500">About the Developer</h2>
          <p className="text-white mt-2">
            Made by Aditya Kumar, a passionate frontend developer.
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

export default Contact;
