import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("wiremitUser"); // Check if user exists in localStorage

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
export default ProtectedRoute;