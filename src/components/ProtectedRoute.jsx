import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";


const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(UserContext);
  const userRole = user?.userDetails?.user?.userType; // Adjust based on your user structure
console.log(userRole);
if (!userRole) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }
  
  if (!userRole || !allowedRoles.includes(userRole)) {
    
    return <Navigate to="/login" replace />; // Redirect if not allowed
  }

  return children;
};

export default ProtectedRoute;
