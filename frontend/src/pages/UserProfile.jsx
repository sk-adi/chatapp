import React, { useEffect, useState } from "react";

function UserProfile() {
  

  const [user,setUser]=useState([])
  useEffect(()=>{
    const storedUser=localStorage.getItem("user")
    if(storedUser){
      setUser(JSON.parse(storedUser))
    }
  },[])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        {/* Profile Picture */}
        {/* <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        /> */}
        
        {/* Username */}
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{user.name}</h2>
        <p className="text-gray-600 text-sm">{user.username}</p>
        
        {/* Email */}
        <p className="text-gray-600 text-sm">{user.email}</p>

        {/* Status */}
        {/* <span className={`mt-2 inline-block px-3 py-1 text-sm font-medium rounded-full ${
          user.status === "Online" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
        }`}>
          {user.status}
        </span> */}

        {/* Bio */}
        {/* <p className="text-gray-700 mt-3 px-4">{user.bio}</p> */}

        {/* Joined Date */}
        {/* <p className="text-sm text-gray-500 mt-2">Joined: {user.joined}</p> */}

        {/* Edit Profile Button */}
        {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Edit Profile
        </button> */}
      </div>
    </div>
  );
}

export default UserProfile;
