
import {  Outlet,  } from "react-router-dom";


const ProtectedRoute = () => {
  const userToken = localStorage.getItem('token')
  

  if(!userToken){

  return  window.location.href = '/login'
  }
 return <Outlet />
};

export default ProtectedRoute;
