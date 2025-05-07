
import {  Outlet,  } from "react-router-dom";


const ProtectedRoute = () => {
  const userToken = localStorage.getItem('token')
  // const adminToken = localStorage.getItem('adminToken')
  

  if(!userToken ||  userToken === null){
   
  return  window.location.href = '/'
  
  }
 return <Outlet />
};

export default ProtectedRoute;
