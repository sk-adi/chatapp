import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../api/auth";

function ProtectedRoutes() {
  const [isAuthenticated, SetisAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          SetisAuthenticated(false);
          return;
        }
        const authenticatedUser = await isLoggedIn(token);
        if (!authenticatedUser.success) {
          SetisAuthenticated(false);
          return;
        }
        SetisAuthenticated(true);
      } catch (error) {
        SetisAuthenticated(false);
      }
    };

    checkAuth();
  });

  if (isAuthenticated === null) return <p>Loading...</p>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;

  // return (
  //     <div>ProtectedRoutes</div>
  // )
}

export default ProtectedRoutes;
