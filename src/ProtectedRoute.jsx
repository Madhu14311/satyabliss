import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdminLoggedIn = localStorage.getItem("admin_logged_in"); 
  if (!isAdminLoggedIn) {
    return <Navigate to="/adminlogin" replace />;
  }
  return children;
}
