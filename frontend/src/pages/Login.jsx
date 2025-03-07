import React, { useState } from "react";
import { userLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  const [userLoginData, SetuserLoginData] = useState({ email: "", password: "" })
  const [message, Setmessage] = useState("")
  const Navigate = useNavigate()

  const handleOnChange = (e) => {
    SetuserLoginData({ ...userLoginData, [e.target.name]: e.target.value })
  }

  const handleOnLogin = async (e) => {
    e.preventDefault()
    try {
      if (!(userLoginData.email && userLoginData.password)) return Setmessage(`Email and Password are required`)
      const isLoginSuccessfull = await userLogin(userLoginData)
      if (!isLoginSuccessfull.success) {
        Setmessage(isLoginSuccessfull.message)
        return;
      }
      localStorage.setItem("token", isLoginSuccessfull.token)
      Navigate('/user/dashboard')
      Setmessage(isLoginSuccessfull.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      {/* Login Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl px-6 md:px-12 py-12 text-center md:text-left">

        {/* Left Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/your-image-path.jpg"
            alt="Login Illustration"
            className="w-64 md:w-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600">
            Login and <span className="text-white">Connect</span>
          </h1>
          <p className="text-white text-lg mt-4">
            Welcome back! Log in to start chatting with your new friends.
          </p>
          <p>{message}</p>

          {/* Login Form */}
          <form method="post" onSubmit={handleOnLogin} className="space-y-6 mt-6">
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="cursor-pointer w-full py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white text-lg font-semibold shadow-md"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-white mt-4">
            Not a user? <a href="/register" className="text-teal-400 hover:text-teal-500">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
