
import {  Outlet,  } from "react-router-dom";


const ProtectedRoute = () => {
  const userToken = localStorage.getItem('token')
  

  if(!userToken || userToken === null){
   
  return  window.location.href = '/'
  
  }
 return <Outlet />
};

export default ProtectedRoute;
