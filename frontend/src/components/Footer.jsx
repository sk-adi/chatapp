import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-300">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/your-logo-path.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-semibold text-teal-400">Logo</span>
        </div>

        {/* Middle Section: Copyright */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} YourAppName. All rights reserved.</p>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-lg">
            <li>
              <a
                href="/home"
                className="text-gray-300 hover:text-teal-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="text-gray-300 hover:text-teal-400 transition duration-300"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/termsandcondition"
                className="text-gray-300 hover:text-teal-400 transition duration-300"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-gray-300 hover:text-teal-400 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
