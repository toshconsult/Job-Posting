import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";


const ProtectedRoute = ({ children }) => {
  const { user, userToken } = useContext(UserContext);
  const userRole = user?.userDetails?.user?.userType; // Adjust based on your user structure
  const navigate = useNavigate()
console.log(userRole);
// if (!userToken) {
//     return <Navigate to="/login"  />; 
// }

if(userRole === 'client'){
  navigate('/client-dashboard')
} else if (userRole === 'tasker'){
  navigate('/dashboard')
} else {
  navigate('/dashboard')
}
  

  return children;
};

export default ProtectedRoute;
