import React, { useState } from "react";
import { userRegister } from "../api/auth";
import iceCreamDoodle from "../assets/images/IceCreamDoodle.svg"

function SignUp() {

    const [userRegisterData, SetuserRegisteredData] = useState({ name: '', username: "", email: "", password: "" })
    const [message, Setmessage] = useState("")
    const handleOnChange = (e) => {
        SetuserRegisteredData({ ...userRegisterData, [e.target.name]: e.target.value })
    }


    const handleOnRegister = async (e) => {
        e.preventDefault()

        try {
            if (!(userRegisterData.name && userRegisterData.username && userRegisterData.email && userRegisterData.password)) {
                return Setmessage(`all fields are required`)
            }
            const isRegistrationSuccessfull = await userRegister(userRegisterData)
            if (!isRegistrationSuccessfull.success) {
                Setmessage(`${isRegistrationSuccessfull.message}`)
                return;
            }
            Setmessage(`${isRegistrationSuccessfull.message}`)
            return;
        } catch (error) {
            console.log(`Error is handleOnLogin`, error)
            return;
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
            {/* Sign Up Section */}
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl px-6 md:px-12 py-12 text-center md:text-left">

                {/* Left Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400">
                        Register and <span className="text-white">Connect</span>
                    </h1>
                    <p className="text-white text-lg">
                        Join the fun! Sign up now to connect with new people and start chatting instantly.
                    </p>

                    {/* Sign-Up Form */}
                    <p>{message}</p>

                    <form className="space-y-6 mt-6" method="post" onSubmit={handleOnRegister}>
                        <input
                            name="name"
                            onChange={handleOnChange}
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            name="username"
                            onChange={handleOnChange}
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            name="email"
                            onChange={handleOnChange}
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button
                            type="submit"
                            className="cursor-pointer w-full py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white text-lg font-semibold shadow-md"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-white mt-4">
                        Already a user? <a href="/login" className="text-teal-400 hover:text-teal-500">Login here</a>
                    </p>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src={iceCreamDoodle}
                        alt="Sign Up Illustration"
                        className="w-64 md:w-80 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
