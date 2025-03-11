import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isLoggedIn, userLogOut } from "../api/auth";

function Navbar() {
  const Navigate = useNavigate();

  const handleOnLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    const Response = await userLogOut();
    Navigate('/login');
  };

  const isUserLoggedIn=!!localStorage.getItem("token")


  return (
    <nav className="bg-blue-900 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/your-logo-path.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          {/*<span className="text-xl font-bold text-teal-400">Logo</span>*/}
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <NavLink
                to="/home"
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/dashboard"
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/profile"
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                Contact
              </NavLink>
            </li>
            {
              isUserLoggedIn?
              (
                <li>
              <NavLink
                onClick={handleOnLogout}
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                Logout
              </NavLink>
            </li>
              ):(
                <li>
              <NavLink
              to="/login"
                className="text-gray-100 hover:text-teal-300 transition duration-300"
              >
                Login
              </NavLink>
            </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
